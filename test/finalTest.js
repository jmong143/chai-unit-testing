let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);

describe('GET /book', function(){
    it('should get all books from DB', function(done){
        chai.request(server)
        .get('/book')
        .end(function(err, res){
            res.should.have.status(200);
            res.should.be.an('object');
            res.body.should.have.property('message').eql('success');
            
            should.exist(res);
            should.not.exist(err);
            done();
        });
    });
});

describe('POST book', function(){
    it('should save data to DB', function(done){
        let formData = {title: 'Pokemon the Movie', author: 'Satoshi Tajiri', year: '2001', pages: '102'}
        chai.request(server)
        .post('/book')
        .send(formData)
        .end(function(err, res){
            res.should.have.status(200);
            res.should.be.an('object');
            should.exist(res);
            should.not.exist(err);
            done();
        });
    });
});

describe('GET By ID, UPDATE, DELETE', function(done){
    it('should get data by id', function(done){
        var sampleId = '5a960987bcefc02820726fd9';
        chai.request(server)
        .get('/book/'+ sampleId +'')
        .end(function(err, res){
            res.should.have.status(200);
            res.should.be.an('object');
            should.exist(res);
            should.not.exist(err);
            done();
        });
    });

    it('should update data', function(done){
        let updateFormData = {title: 'Pokemon the Movie - Jirachi the wishmaker', author: 'Satoshi Tajiri', year: '2005', pages: '2102'}
        var sampleId = '5a960987bcefc02820726fd9';
        chai.request(server)
        .put('/book/'+ sampleId +'')
        .send(updateFormData)
        .end(function(err, res){
            res.should.have.status(200);
            res.should.be.an('object');
            should.exist(res);
            should.not.exist(err);
            done();
        });
    });

    it('should delete data from DB', function(done){
        var sampleId = '5a960b0f532355380caec8cd';
        chai.request(server)
        .delete('/book/'+ sampleId +'')
        .end(function(err, res){
            res.should.have.status(200);
            res.should.be.an('object');
            should.exist(res);
            should.not.exist(err);
            done();
        });
    });
});
