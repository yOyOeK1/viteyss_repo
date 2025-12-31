


class s_blank_repo_page{

  constructor(){
    cl(`${this.getName} init ....`);
  }

  get getName(){
    return "Blank repo page - template";
  }

  get getDefaultBackgroundColor(){
    return "#ffffff";
  }

  getHtml=()=>{
    return '<b>'+pager.getCurrentPage().getName+`</b><br>
        This is a site installed as a template for building your owne repositories based on static files and directories.<br>
        
        ## about this site<br>
        
        * source of this site is:<pre>
Repository:     [ viteyss_repo ]
Name:           [ blank_repo_test ]</pre>
<br>
* dump of \`./site.json\` <span id="fechStatus">...</span><pre id="siteDumpPre">...</pre>`;
  }



  getHtmlAfterLoad=()=>{
    cl(
      pager.getCurrentPage().getName+
      " - getHtmlAfterLoad()"
    );
    
    fetch( `${this.homeUrl}/site.json`).then(res=>{
        if( res.ok ){   
            //console.log('res',res.json());
            res.json().then(j=>{
                console.log('res j ',j);
                let tNode = document.getElementById('siteDumpPre');
                document.getElementById('fechStatus').innerHTML = `${res.ok?'ok':'ee'}`;
                tNode.innerHTML = JSON.dumpNice( j );
                
            
            
            });
        }
    });
    
  }

  get svgDyno(){
    return '';
  }

  svgDynoAfterLoad=()=>{}

  /*
  onKeypress=( event ) => {}
  
  onWindowResize = ( event ) => {}

  onMessageCallBack=( r )=>{
    cl(
      pager.getCurrentPage().getName+
      " - got msg "
    );
  }
  */
}
