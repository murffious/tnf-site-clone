module.exports = {
  getCategoryByGender: (req, res, next) => {
    const db = req.app.get( 'db' );
    const { params, query } = req;

    if(req.query.count) {
      db.read_products_limited( [params.gender, params.category, query.count] )
    .then( (products) => {
      console.log(products)

      res.status(200).send( products )
    } )
    .catch( (err)=> {
      console.log(err)
    res.status(500).send()
  }
  )
    } else {
      db.read_products( [params.gender, params.category] )
    .then( (products) => {
      res.status(200).send( products )
    } )
    .catch( (err)=> {
      console.log(err)
    res.status(500).send()
  }
)};
},

  getProductById: (req, res, next) => {
    console.log('DONT GO TODD');
    const db = req.app.get( 'db' );
    const { params } = req;
    console.log(params);
    db.read_productById( [params.product_id] )
    .then ( product => {
      res.status(200).send( product )
    } )
    .catch( err => {
      res.status(500).send()
    }
  )}
}
