import { Request, Response, Router } from 'express';
import ProductController from '../controllers/productController';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.post('/', (req: Request, res: Response) => {
  productController.createProduct(req, res);
});

productRoutes.get('/', (req: Request, res: Response) => {
  productController.getAllProducts(req, res);
});

productRoutes.get('/:id', (req: Request, res: Response) => {
  productController.getOneProduct(req, res);
});

productRoutes.patch('/:id', (req: Request, res: Response) => {
  productController.updateProduct(req, res);
});

productRoutes.delete('/:id', (req: Request, res: Response) => {
  productController.deleteProduct(req, res);
});

export default productRoutes;
