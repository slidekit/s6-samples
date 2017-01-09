
var BASE_URL_PREFIX = '../s6/';


function debug( msg )
{
  if( console && console.log )
  {
      console.log( "[debug:slides.js]" + msg );
  }
}


function addScript( name )
{
  // note:
  //  Scripts that are dynamically created and added to the document
  //    are **async** by default

  debug( "addScript " + name );

  var el = document.createElement( 'script' );
  el.type  = 'text/javascript';
  el.src   = BASE_URL_PREFIX + name;
  el.async = false;              // note: new attrib added in HTML5

  //  note: no longer care about old firefox - why? why not?
  // if(!document.head)  // fix for Firefox <4.0
  //  document.head = document.getElementsByTagName('head')[0];

  document.head.appendChild( el );
}

function addStyle( name, media )
{
  debug( "addStyle " + name + ", " + media );

  var el = document.createElement( 'link' );
  el.rel = 'stylesheet';
  el.type = 'text/css';
  el.href = BASE_URL_PREFIX + name;
  el.media = media;

  // if(!document.head)  // fix for Firefox <4.0
  //  document.head = document.getElementsByTagName('head')[0];

  document.head.appendChild( el );
}


function letsGo()
{
  debug( "letsGo" );

  /*********
   * add style sheet links
   */

  addStyle( 'css/themes/blank5.css', 'screen,projection' );
  addStyle( 'css/screen.css',        'screen'            );
  addStyle( 'css/print.css',         'print'             );

  /********
   * add js libs (jquery, etc.)
   */

  addScript( 'js/jquery-2.1.1.min.js' );

  /********
   * add S6 js code
   */

  addScript( 'js/jquery.slideshow.js' );
  addScript( 'js/jquery.slideshow.counter.js' );
  addScript( 'js/jquery.slideshow.controls.js' );
  addScript( 'js/jquery.slideshow.footer.js' );
  addScript( 'js/jquery.slideshow.autoplay.js' );
  addScript( 'js/jquery.slideshow.ready.js' );

  // todo - check why we can't access Slideshow object here
  // Slideshow.debug( 'letsGo says hello' );
  // Slideshow.init();
}


letsGo();
// use document ready why? why not?
// document.addEventListener('DOMContentLoaded', letsGo, false);
