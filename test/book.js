// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../app');
// let should = chai.should();

// chai.use(chaiHttp);

// describe('SAMPLE CRUD USING MOCHA', function(){

    
//     describe('/GET', function(){
//         it('should get all data from database', function(done){
//             chai.request(server)
//             .get('/book')
//             .end(function(err, res){
//                 res.should.have.status(200);
//                 res.should.be.an('object');
//                 res.body.should.have.property('resultMessage').eql('Successfully Retrieve all users');
//                 should.not.exist(err);
//                 should.exist(res);
//                 done();
//             });
//         });
//     });

//     describe('/POST', function(){
//         it('should save data from database', function(done){
//             let newData = {
//                 title   : 'WWE Wrestlemania 34',
//                 author  : 'WWE',
//                 year    : '2018',
//                 pages   : '1003'
//             }
//             chai.request(server)
//             .post('/book')
//             .send(newData)
//             .end(function(err, res){
//                 res.should.have.status(200);
//                 res.should.be.an('object');
//                 should.not.exist(err);
//                 should.exist(res);
//                 done();
//             });
//         });
//     });

//     describe('/GET/:id', function(){
//         it('should get data by id', function(done){
//             let sampleId = '5a95f8b8bc8c2617f437726f';
//             chai.request(server)
//             .get('/book/ '+ sampleId +'' )
//             .end(function(err,res){
//                 res.should.have.status(200);
//                 res.should.be.an('object');
//                 should.not.exist(err);
//                 should.exist(res);
//                 done();
//             })
//         });
//     });

//     describe('/PUT/:id', function(){
//         it('should update data to database', function(done){
//             let sampleId = '5a95f8b8bc8c2617f437726f';
//             let updateForm = {
//                 title   : 'WWE Wrestlemania 33',
//                 author  : 'WWE',
//                 year    : '2017',
//                 pages   : '901'
//             }
//            chai.request(server)
//            .put('/book/' + sampleId +' ')
//            .send(updateForm)
//            .end(function(err, res){
//                 res.should.have.status(200);
//                 res.should.be.a('object')
//                 should.exist(res);
//                 should.not.exist(err);
//                 done();
//            });
//         });
//     });


//     // describe('/DELETE/:id', function(){
//     //     it('should delete data from database', function(done){
//     //         let sampleId = '5a95f71b7382e52658c28696';
//     //         chai.request(server)
//     //         .delete('/book/'+ sampleId +'' )
//     //         .end(function(err, res){
//     //             res.should.be.an('object');
//     //             res.should.have.status(200);
//     //             should.exist(res);
//     //             should.not.exist(err);
//     //             done();
//     //         })
//     //     });
//     // });


// });