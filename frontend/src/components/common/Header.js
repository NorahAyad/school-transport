

function Header() {

   
    
  return (
    <div className="inicio">
    <header class="mobile">
  <div class="row">
    <div class="col full">
      <div class="logo"> <img src={"https://vstedu.azureedge.net/v9/img/logo_latest.png?v=14"}/> </div>
      <nav id="nav-wrap"> <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a> <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" class="nav">
          <li><a href="#intro">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Features</a></li>
          <li><a href="#journal">Login </a></li>
         
          
        </ul>
      </nav>
    </div>
  </div>
</header>
<section className="banner">
           
           <h1 className="titulo">
             BIENVENIDO A BINNCORP
           </h1>
           <p>
             ¿Tiene claro el rumbo de su compañía para los próximos 5 años? ¿Sabe cuánto vale su compañía? ¿Sus flujos de caja le permiten hacer inversiones prósperas y duraderas? Sí respondió NO a una de estas preguntas, usted nos necesita.
           </p>
      
          
         </section>
         

        <main className="contenido">

        <section id="about">
        <div className="row section-head">
          <div className="col one-fourth">
            <h2>About Us</h2>
            <p className="desc">This is what we are.</p>
          </div>
          <div className="col three-fourths">
            <p className="intro">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. </p>
          </div>
        </div>
      </section>
      <section id="services">
  <div class="row section-head">
    <div >
      <h2>Services</h2>
      
    </div>
    
  </div>
  <div class="row">
    <div class="services-wrapper">
      <div class="col">
        <h2><i class="icon-desktop"></i>Webdesign</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et molestias iusto odio dignissimos.</p>
      </div>
      <div class="col ">
        <h2><i class="icon-star"></i>Branding</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos.</p>
      </div>
      <div class="col m-first">
        <h2><i class="icon-camera"></i>Photography</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et molestias quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos.</p>
      </div>

    </div>
  </div>
</section>
       
        </main>
        <footer className="pie-de-pagina">
          <section className="grupo">
            
            
            <ul className="menu">
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                Calle 147A # 50-24
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true" />
                (57-1-) 9060189
              </li>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true" />
                info@binncorpcol.com
              </li>
            </ul>
          </section>
          <section className="grupo copy">
          </section>
        </footer>
       
      </div>
  );
}

export default Header;