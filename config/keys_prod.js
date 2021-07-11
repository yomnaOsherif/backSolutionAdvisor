module.exports = {
  YOUR_GOOGLE_JSON_KEY: {
    "type": process.env.Type_service,
    "project_id": process.env.Project_id,
    "private_key_id": process.env.Private_key_id,
    "private_key": process.env.Private_key,
    "client_email": process.env.Client_email,
    "client_id": process.env.Client_id,
    "auth_uri": process.env.Auth_uri,
    "token_uri": process.env.Token_uri,
    "auth_provider_x509_cert_url": process.env.Auth_provider_x509_cert_url,
    "client_x509_cert_url": process.env.Client_x509_cert_url
  },  
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET
  }