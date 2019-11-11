// this file will handle the logic of interacting with the database



// METHODS
module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const {name, description, price, image_url} = req.body; //this is a parameter
//When adding parameters to sql, all you have to do is pass in an array as the first argument and then the element(s) in the array map to $1, $2, etc... For example: dbInstance.create_product([ name, description, price, image_url ]), name is $1, description is $2, price is $3, and image_url is $4. Remember, if you have only one argument, you do not need to pass it in an array.
console.log(req.body)
    dbInstance.create_product([ name, description, price, image_url ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      });
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db')
    
    dbInstance.read_product()
    .then( product => res.status(200).send( product ) )
    .catch( err => {
      res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
      console.log(err)
    } );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db')

    dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db')
    const { params, query } = req.params

    dbInstance.update_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "WHAT DID YOU DO TO BREAK IT! JK, Our engineers have been informed!"})
        console.log(err)
      } );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db')
    const { id } = req.params;

    dbInstance.delete_product()
      .then( () => res.sendSatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  }

};

// module.exports = {
//   create: (req, res, next) => {
//     const dbInstance = req.app.get('db');
//     const { name, description, price, image_url } = req.body;

//     dbInstance.create_product([name, description, price, image_url])
//       .then(() => res.sendStatus(200))
//       .catch(err => {
//         res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
//         console.log(err)
//       });
//   },

//   getOne: (req, res, next) => {
//     const dbInstance = req.app.get('db');
//     const { id } = req.params;

//     dbInstance.read_product(id)
//       .then(product => res.status(200).send(product))
//       .catch(err => {
//         res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
//         console.log(err)
//       });
//   },

//   getAll: (req, res, next) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.read_products()
//       .then(products => res.status(200).send(products))
//       .catch(err => {
//         res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
//         console.log(err)
//       });
//   },

//   update: (req, res, next) => {
//     const dbInstance = req.app.get('db');
//     const { params, query } = req;

//     dbInstance.update_product([params.id, query.desc])
//       .then(() => res.sendStatus(200))
//       .catch(err => {
//         res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
//         console.log(err)
//       });
//   },

//   delete: (req, res, next) => {
//     const dbInstance = req.app.get('db');
//     const { id } = req.params;

//     dbInstance.delete_product(id)
//       .then(() => res.sendStatus(200))
//       .catch(err => {
//         res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
//         console.log(err)
//       });
//   }
// };