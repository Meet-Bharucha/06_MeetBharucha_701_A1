function getResponse(input) {
    const message = input.toLowerCase();
  
    if (message.includes("diet plan")) {
      return "A balanced diet includes protein, healthy fats, complex carbs, fruits, and vegetables.";
    }
  
    if (message.includes("lose weight")) {
      return "To lose weight, maintain a calorie deficit and increase daily activity.";
    }
  
    if (message.includes("build muscle")) {
      return "For muscle gain, follow resistance training and eat a protein-rich diet.";
    }
  
    if (message.includes("protein")) {
      return "Good protein sources include chicken, eggs, tofu, lentils, and protein shakes.";
    }
  
    if (message.includes("cardio")) {
      return "Cardio like walking, jogging, or cycling helps with heart health and fat burning.";
    }
  
    if (message.includes("how much water") || message.includes("drink water")) {
      return "It's recommended to drink at least 2–3 liters (8–12 cups) of water daily.";
    }
  
    if (message.includes("rest") || message.includes("recovery")) {
      return "Rest is essential. Aim for 7–9 hours of sleep and rest days between intense workouts.";
    }
  
    if (message.includes("bye") || message.includes("exit")) {
      return "Stay strong! Goodbye!";
    }
  
    return "I'm not sure about that. Can you ask a fitness or diet related question?";
  }
  
  module.exports = { getResponse };
  