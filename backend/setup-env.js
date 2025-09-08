const fs = require('fs');
const path = require('path');

const envContent = `PORT=3001
MONGO_URI=mongodb://localhost:27017/vigybag
JWT_SECRET=vigybag_jwt_secret_key_2024
SESSION_SECRET=vigybag_session_secret_2024
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
NODE_ENV=development
`;

const envPath = path.join(__dirname, '.env');

try {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!');
  console.log('📁 Location:', envPath);
  console.log('\n⚠️  IMPORTANT: Update GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET with your actual values');
} catch (error) {
  console.error('❌ Error creating .env file:', error.message);
  console.log('\n📝 Please create a .env file manually with this content:');
  console.log(envContent);
}
