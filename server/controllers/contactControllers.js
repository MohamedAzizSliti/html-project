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



  export const getAll= async (req, res ) => {

    await knexConn.select().table('contact')
    .then(data => res.json(data))
    .catch(err => res.json(err))

  }
  export const get = async (req, res ) => {

    await knexConn.select().table('contact').where('contact.id',req.params.contactid)
    .then(data => res.json(data))
    .catch(err => res.json(err))

  }
  /* add contact  */
  export const add = async (req, res ) => {

    await knexConn
      .insert({'title': req.body.title,'author' : req.body.author,'image': req.body.image,'price': req.body.price})
      .into('contact')
      .then(data => res.json(data))
      .catch(err => res.json(err))

  }

  /* update contact */

  export const update = async (req, res ) => {

    await knexConn
    .from('contact')    
    .where({ 'contact.id': req.params.contactid })
    .update({'title': req.body.title,'author' : req.body.author,'image': req.body.image,'price': req.body.price})         
     .then(data => res.json(data))
    .catch(err => res.json(err))

  }


  /* delete contact */
  export const del = async (req, res ) => {

    await knexConn
    .delete()
    .from('contact')    
    .where({ 'contact.id': req.params.contactid })
    .then(data => res.json(data))
    .catch(err => res.json(err))

  }


  