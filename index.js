let r = require('rethinkdb')
let connection;
// r.connect({ host: 'localhost', port: 28015 }).then(data => {
//     console.log("promis===", data)
// }).catch(err => {
//     console.log("err===", err)
// })
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  connection = conn;
//   r.db('test').tableCreate('tv_shows').run(connection, function(err, res) {
//     if(err) throw err;
    // r.table('tv_shows').insert({ name: 'New', Data: { H: "ss"} }).run(connection, function(err, res)
    // {
    //   if(err) throw err;
    //   console.log(res);
    // });
//   });

console.log("=======r.js('1 + 1').run(conn)===", r.js('1 + 1').run(conn).then(data => {
    console.log(data, "========================r.js('1 + 1').run(conn)")
}))

r.table('tv_shows').get(100).changes().run(connection, function(err, cursor) {
    if (err) throw err;
    cursor.each(function(err, row) {
        if (err) throw err;
        console.log("changes=================", JSON.stringify(row, null, 2));
    });
});

// r.table('tv_shows').run(connection, function(err, cursor) {
//     if (err) throw err;
//     cursor.toArray(function(err, result) {
//         if (err) throw err;
//         console.log(JSON.stringify(result, null, 2));
//     });
// });

// r.table('tv_shows').update({name: "2332"}).
//     run(connection, function(err, result) {
//         if (err) throw err;
//         console.log(JSON.stringify(result, null, 2));
//     });
});

r.table('tv_shows').insert({ name: '2332', Data: { D: "aa"} }).run(connection, function(err, res)
    {
      if(err) throw err;
      console.log(res);
    });