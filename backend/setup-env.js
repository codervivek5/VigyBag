const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const jwtSecret = crypto.randomBytes(32).toString('hex');
const sessionSecret = crypto.randomBytes(32).toString('hex');

const envContent = `PORT=3001
MONGO_URI=mongodb://localhost:27017/vigybag
JWT_SECRET=${jwtSecret}
SESSION_SECRET=${sessionSecret}
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NODE_ENV=development
`;

const envPath = path.join(__dirname, '.env');

try {
  fs.writeFileSync(envPath, envContent, { encoding: 'utf8', flag: 'w' });
  console.log('✅ .env file created successfully!');
  console.log('📁 Location:', envPath);
  console.log('\n⚠️  IMPORTANT: Update GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET with your actual values');
} catch (error) {
  console.error('❌ Error creating .env file:', error.message);
  console.log('\n📝 Please create a .env file manually with this content:');
  console.log(envContent);
}
