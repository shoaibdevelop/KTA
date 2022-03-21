const mongoose =  require('mongoose');

const DinnerSchema = mongoose.Schema({
    name: {
      type: String
    },
    recipieId: {
      type: String
    },
    recipieType: {
      type: String
    },
    detailDescription: {
      
    },
    nutrition: {
      calories: {
          type: Number
      },
      net_carbs: {
          type: Number
      },
      fat: {
          type: Number
      },
      protein: {
          type: Number
      },
    },
    servings: {
      type: Number
    },
    preparation_time: {
      type: Number
    },
    imagePath: {
      type: String
    },
    ingredients: {
      type: [
        String
      ]
    },
    recipiesInstructions: {
      type: [
        String
      ]
    },
    notes: {
      type: String
    }
  }, 
{ collection : 'dinner' });

const Dinner = module.exports = mongoose.model('dinner',DinnerSchema);