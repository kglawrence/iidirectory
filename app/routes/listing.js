import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [
      {id: 1, name:'Harry S Truman', position:'POTUS', email:'harry.truman@email.com', phone:'555-1111', img:'http://a2.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MzkwNTI0NDI3.jpg'},
      {id: 2, name:'Luke Skywalker', position:'Jedi Knight', email:'luke.skywalker@email.com', phone:'555-2222', img:'http://ww1.hdnux.com/photos/36/15/45/7919956/16/920x920.jpg'},
      {id: 3, name:'Harry Potter', position:'closet dweller', email:'harry.potter@email.com', phone:'555-3333', img:'http://vignette1.wikia.nocookie.net/harrypotter/images/c/c1/Harry%2Bpotter-Harry_Potter_HP4_01.jpg/revision/latest?cb=20120207172914'},
      {id: 4, name:'George Scostanza', position:'Physics Consultant', email:'george.scostanza@email.com', phone:'555-4444', img:'http://i.kinja-img.com/gawker-media/image/upload/s--jSl95FGz--/827720171576372004.jpg'},
      {id: 5, name:'Daffy Duck', position:'Resident duck', email:'daffy.duck@looneytoons.inc', phone:'867-5309', img:'http://wallpapercave.com/wp/WY0bQFU.gif'},
      {id: 6, name:'George Takei', position:'Actor extraordinaire', email:'george.takei@email.com', phone:'555-6666', img:'http://www.adweek.com/files/imagecache/node-blog/blogs/george-takei-hed-2013.jpg'},
      {id: 7, name:'Captian America', position:'Super Hero', email:'captian.america@email.com', phone:'555-7777', img:'http://cdn.movieweb.com/img.news.tops/NEivULxsbV87lq_2_b.jpg'}
    ].findBy ('id', params.id);
  }

});
