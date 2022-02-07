import { Request, Response } from 'express';
import Product from '../models/product';

export default class ProductController {
  createProduct = async (req: Request, res: Response) => {
    try {
      if (!(req.body.name || req.body.units || req.body.unitValue)) {
        return res.status(400).json({
          message:
            'Produto não foi criado, é necessário o nome, a quantidade e o valor unitário para a criação de um produto.',
        });
      }
      const product = await Product.create(req.body);

      return res.status(200).json({ product });
    } catch (error) {
      return res.status(500).json({
        message: 'Falha no sistema de criação de produto, tente novamente!',
      });
    }
  };

  getAllProducts = async (req: Request, res: Response) => {
    try {
      const entries = Object.entries(req.query);
      const nonEmptyOrNull = entries.filter(
        ([, val]) => val !== '' && val !== null
      );

      const query = Object.fromEntries(nonEmptyOrNull);
      const allProducts = await Product.find(query);

      return res.status(200).json(allProducts);
    } catch (error) {
      return res.status(500).json({
        message: 'Falha ao processar requisição',
      });
    }
  };

  getOneProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({
          message: 'Produto não encontrado',
        });
      }

      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Falha ao processar requisição',
      });
    }
  };

  updateProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      const newProduct = req.body;

      if (!product) {
        return res.status(404).json({
          message: 'Relatório não encontrado',
        });
      }

      try {
        if (!(req.body.name || req.body.units || req.body.unitValue)) {
          return res.status(400).json({
            message:
              'Produto não foi criado, é necessário o nome, a quantidade e o valor unitário para a criação de um produto.',
          });
        }
        await Product.findByIdAndUpdate(productId, newProduct);

        return res.status(200).json({
          message: 'Produto atualizado com sucesso!',
        });
      } catch (error) {
        return res.status(500).json({
          message: 'Falha ao atualizar o produto. Tente novamente',
        });
      }

    } catch (error) {
      return res.status(500).json({
        message: 'Falha ao processar requisição',
      });
    }
  };

  deleteProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({
          message: 'Produto não encontrado',
        });
      }

      try {
        await Product.findByIdAndDelete(productId);
        return res.status(200).json({
          message: 'Produto deletado com sucesso!',
        });
      } catch (error) {
        return res.status(500).json({
          message: 'Falha ao deletar o produto. Tente novamente',
        });
      }

    } catch (error) {
      return res.status(500).json({
        message: 'Falha ao processar requisição',
      });
    }
  };
}
