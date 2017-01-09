
var BASE_URL_PREFIX = '../s6/';

function addScript( name )
{
  var el = document.createElement( 'script' );
  el.type = 'text/javascript';
  el.src = BASE_URL_PREFIX + name;

  if(!document.head)  // fix for Firefox <4.0
    document.head = document.getElementsByTagName('head')[0];

  document.head.appendChild( el );
}

function addStyle( name, media )
{
  var el = document.createElement( 'link' );
  el.rel = 'stylesheet';
  el.type = 'text/css';
  el.href = BASE_URL_PREFIX + name;
  el.media = media;

  if(!document.head)  // fix for Firefox <4.0
    document.head = document.getElementsByTagName('head')[0];

  document.head.appendChild( el );
}


function letsGo()
{
  /*********
   * add style sheet links
   */

  // addStyle( 'themes/blank5/o/projection.css', 'screen,projection' );
  // addStyle( 'themes/blank5/o/screen.css',     'screen'            );
  // addStyle( 'themes/blank5/o/print.css',      'print'             );

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

// letsGo();
document.addEventListener('DOMContentLoaded', letsGo, false);
