//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Book = require('../models/book');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
describe('Books', () => {
    beforeEach((done) => {
        /*Book.remove({}, (err) => {
        });*/
        done();
    });
    describe('/GET book', () => {
        it('it should GET all the books', (done) => {
            chai.request(server)
            .get('/book')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                should.not.exist(err);
                should.exist(res);
                done();
            });
        });
    });

    describe('/POST book', () => {
        it('it should POST book', (done) => {
            let newBook = {
                title: 'WWE Wrestlemania 34',
                author: 'WWE',
                year: '2018',
                pages: '90'
            }
            chai.request(server)
            .post('/book')
            .send(newBook)
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('object');
                done();
            });
        });
    });

    describe('/GET/:id book', () => {
        it('it should GET a book by the given id', (done) => {
          let book = new Book({ title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: '1954', pages: '1170' });
          book.save((err, book) => {
              chai.request(server)
              .get('/book/' + book.id)
              .send(book)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('author');
                  res.body.should.have.property('pages');
                  res.body.should.have.property('year');
                  res.body.should.have.property('_id').eql(book.id);
                done();
              });
          });
        });
    });


    describe('/PUT/:id book', () => {
        it('it should UPDATE a book given the id', (done) => {
          let book = new Book({title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1948, pages: 778})
          book.save((err, book) => {
                  chai.request(server)
                  .put('/book/' + book.id)
                  .send({title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950, pages: 778})
                  .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('Book updated!');
                      res.body.book.should.have.property('year').eql(1950);
                    done();
                  });
            });
        });
    });


 describe('/DELETE/:id book', () => {
      it('it should DELETE a book given the id', (done) => {
        let book = new Book({title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1948, pages: 778})
        book.save((err, book) => {
                chai.request(server)
                .delete('/book/' + book.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Book successfully deleted!');
                    res.body.result.should.have.property('ok').eql(1);
                    res.body.result.should.have.property('n').eql(1);
                  done();
                });
          });
      });
    });
    
});

