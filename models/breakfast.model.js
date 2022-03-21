const mongoose =  require('mongoose');

const BreakfastSchema = mongoose.Schema({
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
{ collection : 'breakfast_recipes' });

const Breakfast = module.exports = mongoose.model('breakfast_recipes',BreakfastSchema);