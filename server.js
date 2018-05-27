var express = require("express");
var bodyparser = require("body-parser");
var request = require("request-promise");
var cheerio = require("cheerio");

app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended : true
}));
var port = process.env.PORT || 3000;

app.get("/:name/:id",(req,res)=>{
    var nik=[];
    var name= req.params.name;
    var id = req.params.id;
    console.log(name+" "+id);
    
    // request("https://www.moneycontrol.com/financials/"+name+"/balance-sheetVI/"+id,function(error,response,html){
    //     var arr=[];
        
    //     var $ = cheerio.load(html);
    //     var box = $("div.boxBg1");
    //     var a= box.children("table.table4").next().children().children();
    //     var b = a.eq(12).children().eq(0).text();
        
    //     a.each(function(i, element){
    //         var b =a.eq(i).children();
    //         var arr_mid = [];    
    //         b.each(function(j,element){
    //             if(j!=0){
    //                 arr_mid.push(b.eq(j).text());
    //             }
                
    //         });
    //         arr.push(b.eq(0).text(),arr_mid);
            
    //     });
    //     nik.push("FINANCIALS",arr); 
           
        
        
        
    // });

    request("https://www.moneycontrol.com/financials/"+name+"/balance-sheetVI/"+id).then(function(html){
        var arr=[];
        
        var $ = cheerio.load(html);
        var box = $("div.boxBg1");
        var a= box.children("table.table4").next().children().children();
        
        a.each(function(i, element){
            var b =a.eq(i).children();
            var arr_mid = [];    
            b.each(function(j,element){
                if(j!=0){
                    arr_mid.push(b.eq(j).text());
                }
                
            });
            arr.push(b.eq(0).text(),arr_mid);
            
        });
        nik.push("FINANCIALS",arr); 
        console.log("Finan ok");
    },()=>{
        alert("Promise rejected, check url");
    }).then(function(){
        request("https://www.moneycontrol.com/financials/"+name+"/profit-lossVI/"+id).then(function(html){
            var arr=[];
            
            var $ = cheerio.load(html);
            var box = $("div.boxBg1");
            var a= box.children("table.table4").next().children().children();
            
            a.each(function(i, element){
                var b =a.eq(i).children();
                var arr_mid = [];    
                b.each(function(j,element){
                    if(j!=0){
                        arr_mid.push(b.eq(j).text());
                    }
                    
                });
                arr.push(b.eq(0).text(),arr_mid);
                
            });
            nik.push("Profit and Loss",arr); 
            console.log("PL ok");
            
        }).then(function(){
            request("https://www.moneycontrol.com/financials/"+name+"/results/quarterly-results/"+id).then(function(html){
            var arr=[];
            
            var $ = cheerio.load(html);
            var box = $("div.boxBg1");
            var a= box.children("table.table4").next().children().children();
            
            a.each(function(i, element){
                var b =a.eq(i).children();
                var arr_mid = [];    
                b.each(function(j,element){
                    if(j!=0){
                        arr_mid.push(b.eq(j).text());
                    }
                    
                });
                arr.push(b.eq(0).text(),arr_mid);
                
            });
            nik.push("Quarterly",arr); 
            console.log("Quar ok");
            
        }).then(function(){
            request("https://www.moneycontrol.com/financials/"+name+"/results/half-yearly/"+id).then(function(html){
            var arr=[];
            
            var $ = cheerio.load(html);
            var box = $("div.boxBg1");
            var a= box.children("table.table4").next().children().children();
            
            a.each(function(i, element){
                var b =a.eq(i).children();
                var arr_mid = [];    
                b.each(function(j,element){
                    if(j!=0){
                        arr_mid.push(b.eq(j).text());
                    }
                    
                });
                arr.push(b.eq(0).text(),arr_mid);
                
            });
            nik.push("Half yearly",arr); 
            console.log("hf ok");
            
        }).then(function(){
            request("https://www.moneycontrol.com/financials/"+name+"/results/nine-months/"+id).then(function(html){
                var arr=[];
                
                var $ = cheerio.load(html);
                var box = $("div.boxBg1");
                var a= box.children("table.table4").next().children().children();
                
                a.each(function(i, element){
                    var b =a.eq(i).children();
                    var arr_mid = [];    
                    b.each(function(j,element){
                        if(j!=0){
                            arr_mid.push(b.eq(j).text());
                        }
                        
                    });
                    arr.push(b.eq(0).text(),arr_mid);
                    
                });
                nik.push("Nine months",arr); 
                console.log("nm ok");
                
            }).then(function(){
                request("https://www.moneycontrol.com/financials/"+name+"/results/yearly/"+id).then(function(html){
                    var arr=[];
                    
                    var $ = cheerio.load(html);
                    var box = $("div.boxBg1");
                    var a= box.children("table.table4").next().children().children();
                    
                    a.each(function(i, element){
                        var b =a.eq(i).children();
                        var arr_mid = [];    
                        b.each(function(j,element){
                            if(j!=0){
                                arr_mid.push(b.eq(j).text());
                            }
                            
                        });
                        arr.push(b.eq(0).text(),arr_mid);
                        
                    });
                    nik.push("Yearly",arr); 
                    console.log("y ok");
                    
                }).then(function(){
                    request("https://www.moneycontrol.com/financials/"+name+"/cash-flowVI/"+id).then(function(html){
                        var arr=[];
                        
                        var $ = cheerio.load(html);
                        var box = $("div.boxBg1");
                        var a= box.children("table.table4").next().children().children();
                        
                        a.each(function(i, element){
                            var b =a.eq(i).children();
                            var arr_mid = [];    
                            b.each(function(j,element){
                                if(j!=0){
                                    arr_mid.push(b.eq(j).text());
                                }
                                
                            });
                            arr.push(b.eq(0).text(),arr_mid);
                            
                        });
                        nik.push("Cash flow",arr); 
                        console.log("cf ok");
                        
                    }).then(function(){
                        request("https://www.moneycontrol.com/financials/"+name+"/ratiosVI/"+id).then(function(html){
                            var arr=[];
                            
                            var $ = cheerio.load(html);
                            var box = $("div.boxBg1");
                            var a= box.children("table.table4").next().children().children();
                            
                            a.each(function(i, element){
                                var b =a.eq(i).children();
                                var arr_mid = [];    
                                b.each(function(j,element){
                                    if(j!=0){
                                        arr_mid.push(b.eq(j).text());
                                    }
                                    
                                });
                                arr.push(b.eq(0).text(),arr_mid);
                                
                            });
                            nik.push("Ratio",arr); 
                            console.log("r ok");
                          
                        }).then(function(){
                            request("https://www.moneycontrol.com/financials/"+name+"/capital-structure/"+id).then(function(html){
                                var arr=[];
                                
                                var $ = cheerio.load(html);
                                var box = $("div.boxBg1");
                                var a= box.children().next().children("table.table4").next().children().children();
                                

                                a.each(function(i, element){
                                    var b =a.eq(i).children();
                                    var arr_mid = [];    
                                    b.each(function(j,element){
                                        
                                            arr_mid.push(b.eq(j).text());
                                        
                                        
                                    });
                                    arr.push(arr_mid);
                                    
                                });
                                nik.push("Capital Str",arr); 
                                console.log("cs ok");
                                res.json(nik);    
                            },()=>{
                                alert("Promise rejected, check url");
                            }).catch((error)=>{
                                alert(error);
                            });  
                        },()=>{});  
                        
                        
                        
                        
                        
                        
                         
                    },()=>{});


                    
                },()=>{});  
            },()=>{});



             
        },()=>{});
            
            
            
           
            
        },()=>{});
        
        },()=>{
            alert("Promise rejected, check url");    
        });


        


        
    },()=>{
        alert("Promise rejected, check url");
    }).catch((error)=>{
        alert(error);
    });

    
    // console.log(nik);

    

});







app.listen(port,console.log("Started listening on "+port));