const Career = require('../models/career');

module.exports = {
   index, 
   new: newCareer, 
   create, 
   show, 
   edit, 
   update: updateCareer, 
   delete: deleteCareer, 
   complete: completeCareer, 
   submitCareerComments
};


async function index(req, res) {
    try {
    const careers = await Career.find({});
    res.render('careers/index', { careers });
    } catch (err) {
        console.log(err);
        res.render('careers/index', {errorMsg: err.message});
    }
}

function newCareer(req , res) {
    res.render('careers/new', {errorMsg: ''});
}

async function create(req, res) {
    try {
        await Career.create(req.body);
        res.redirect('/careers');
    } catch {
        console.log(err);
        res.render('careers/new', {errorMsg: err.message});
    }
}

async function show(req, res){
    try {
        const career = await Career.findById(req.params.id);
        res.render('careers/show', {career});
    } catch(err) {
        console.log(err);
        res.redirect('/careers');
    }
}

async function edit(req, res){
    try {
        const career = await Career.findById(req.params.id);
        res.render('careers/edit', {career});
    } catch (err) {
        res.redirect('/careers/');
    }
}

async function updateCareer(req, res) {
    try {
        await Career.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/careers/' + req.params.id)
    }  catch (err) {
      res.render(`/careers/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }

async function deleteCareer(req, res) {
    try {
      await Career.findByIdAndRemove(req.params.id);
      res.redirect('/careers');
    }  catch (err) {
      res.render('/careers', { errorMsg: err.message });
    }
  }

  

async function completeCareer(req, res) {
    try {
      const career = await Career.findById(req.params.id);
      res.render('careers/complete', { career });
    } catch (err) {
      res.render('error', { errorMsg: err.message });
    }
  }


  async function submitCareerComments(req, res) {
    try {
        await Career.findByIdAndUpdate(req.params.id, req.body)
        res.render(`/completed/${req.params.id}/comments`);
    }  catch (err) {
      res.render(`/completed/${req.params.id}/comments`, { errorMsg: err.message });
    }
  }

// async function submitCareerComments(req, res) {
//     try {
//       const career = await Career.findById(req.params.id);
//       career.comments = req.body.comments;
//       await career.save();
//       res.redirect(`/completed/${career.id}`);
//     } catch (err) {
//       res.render(`/completed/${career.id}`, { errorMsg: err.message });
//     }
//   }

// async function submitCareerComments(req, res) {
//     try {
//       const career = await Career.findById(req.params.id);
//       res.render('completed', { career });
//     } catch (err) {
//       res.render('error', { errorMsg: err.message });
//     }
//   }
  