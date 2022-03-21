const mongoose =  require('mongoose');

const LunchSchema = mongoose.Schema({
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
{ collection : 'lunch' });

const Lunch = module.exports = mongoose.model('lunch',LunchSchema);