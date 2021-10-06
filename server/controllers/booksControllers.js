import Express  from "express";

import knex  from "knex";

const knexConn = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '',
      database : 'books'
    }
  });



  export const getAllBooks = async (req, res ) => {

    await knexConn.select().table('books')
    .then(data => res.json(data))
    .catch(err => res.json(err))

  }
  export const getBook = async (req, res ) => {

    await knexConn.select().table('books').where('books.id',req.params.bookid)
    .then(data => res.json(data))
    .catch(err => res.json(err))

  }
  /* add books  */
  export const addbook = async (req, res ) => {

    await knexConn
      .insert({'title': req.body.title,'author' : req.body.author,'image': req.body.image,'price': req.body.price})
      .into('books')
      .then(data => res.json(data))
      .catch(err => res.json(err))

  }

  /* update book */

  export const updatebook = async (req, res ) => {

    await knexConn
    .from('books')    
    .where({ 'books.id': req.params.bookid })
    .update({'title': req.body.title,'author' : req.body.author,'image': req.body.image,'price': req.body.price})         
     .then(data => res.json(data))
    .catch(err => res.json(err))

  }


  /* delete book */
  export const delbook = async (req, res ) => {

    await knexConn
    .delete()
    .from('books')    
    .where({ 'books.id': req.params.bookid })
    .then(data => res.json(data))
    .catch(err => res.json(err))

  }


  