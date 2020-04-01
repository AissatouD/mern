db.createUser({
  user: "aissatou-azirar",
  pwd: "secret",
  roles: [
    {
      role: "readWrite",
      db: "myDB"
    }
  ]
});
