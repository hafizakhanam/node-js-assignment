var fs=require('fs');
var http=require('http');

const port = 3000;
var server=http.createServer(function(req,res){

    

    if(req.url==="/"){
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        const home=fs.readFileSync('public/index.html');
        res.write(home);
        res.end();
    }
    else if(req.url==="/about"){
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        const about = fs.readFileSync('public/about.html');
        res.write(about);
        res.end();
    }
    else if(req.url==='/style.css'){
        res.writeHead(200,{
            'Content-Type':'text/css'
        })
        const css = fs.readFileSync('public/style.css');    
        res.write(css);
        res.end();
    }
    else if(req.url==='/main.js'){
        res.writeHead(200,{
            'Content-Type':'text/js'
        })
        const js = fs.readFileSync('public/main.js');    
        res.write(js);
        res.end();
    }
    else{
        res.writeHead(404,{
            'Content-Type':'text/html'
        });
        res.write(`<h1 style="text-align: center;">404 Not Found</h1>`);
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});