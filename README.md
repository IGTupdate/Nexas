# Nexas
PeerMe 

The web application facilitates connecting Engineers. The application performs the following functions:

1. Perform algorithmic matching to suggest user connections based on their technical profiles. 
2. The users can filter profiles, discover open projects and form collaboration groups


Prerequisites
Before you can run this application, you'll need to have the following installed:

1. Node.js
2. MongoDB
3. Jest


Getting Started
1. Clone the repository to your local machine using Git:
2. Install the dependencies by running the following command: npm install
3. Start the Node.js server by running the following command: node start.js
4. Run the test for the controllers (tesing the schema): npm run test or npm test




additional information: User Groups schema

- user:  reference to the User model. It stores the ObjectId of a user in the User collection. It is a required field.
- group: This field is a reference to the Group model. It stores the ObjectId of a group in the Group collection. It is also a required field.
- role: This field is a string that can have one of two possible values: 'admin' or 'member'. It represents the user's role within the group. It is a required field.