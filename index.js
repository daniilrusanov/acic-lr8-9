const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;
const app = express();
const productRoutes = require('./router/product.routes');
// const ProductTemplateRoutes = require('./router/product-template.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('.'));

app.get('/', (req, res) => {
    res.status(200).json({'Сервер працює': 'Успішно'});
})

app.use('/api/SportingGoods', productRoutes);
// app.use('/api/product-template', productRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
