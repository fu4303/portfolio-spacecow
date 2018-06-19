'use strict';

import {Badge} from "./animation-badge";

export class ContactForm {
  constructor() {
    this.container = document.getElementById( 'js-contact-container' );
    this.headline = document.getElementById('js-contact-headline');
    
    this.form = document.getElementById('js-contact-form');
    this.fields = document.querySelectorAll('.contact-form .input');
    this.error = document.getElementById('js-error-message');

    this.init();
  }

  init() {
    this.form.addEventListener( 'submit', ( e ) => {
      e.preventDefault();
      this.validate();
    });

    // sets class, if input filled
    this.fields.forEach( elm => {
      elm.addEventListener( 'focus', function() {
        elm.classList.add( 'filled' );
      });

      elm.addEventListener( 'blur', function() {
        if ( elm.value === '' ) {
          elm.classList.remove( 'filled' );
        }
      });
    });
  }

  validate() {
    this.fields.forEach( ( elm ) => {
      if ( elm.value === '' ) {
        elm.classList.add('error');
      } else {
        elm.classList.remove('error');
        this.error.innerText = '';
      }
    });

    if ( document.querySelector( '.contact-form .input.error') !== null ) {
      this.error.innerText = 'Please fill out the fields correctly!';
    } else {
      this.submit();
    }
  }

  submit() {
    let email = '';
    let xhr = new XMLHttpRequest();

    this.fields.forEach( ( elm ) => {
      email += elm.id + '=' + elm.value + '&';
    });

    // remove last ampersand
    email = email.slice( 0, -1 );

    xhr.onreadystatechange = () => {
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        let isSent = xhr.responseText;

        // if email successfully sent
        if ( isSent ) {
          this.onSuccess();
        } else {
          this.onFail();
        }
      }
    };

    xhr.open( 'POST', 'http://localhost:8000/mail' );
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhr.send( email );
  }

  onSuccess() {
    this.container.classList.add( 'fade-out' );

    setTimeout( () => {
      this.form.remove();
      this.headline.innerHTML = 'Thanks!';
      document.getElementById( 'js-main' ).style.marginTop = '80px';

      // find a better way to insert svgs
      let svg = '<div class="trek-badge" id="js-trek-badge">\n' +
        '  <svg width="613" height="934" viewBox="0 0 613 934" xmlns="http://www.w3.org/2000/svg"><title>space-trek</title><g id="Page-1" fill="none" fill-rule="evenodd"><g id="space-trek" transform="translate(10 10)"><path d="M303.624 0s229.808 311.069 281.79 792.996c4.44 41.155 7.39 63.14 7.39 74.742 0 19.657-57.577-359.613-205.745-314.106C213.307 606.996 55.576 858.954 7.25 911.517c-27.856 30.297 27.262-285.853 119.285-551.77S303.624 0 303.624 0z" id="Badge" stroke="#000" stroke-width="20" fill="#CCCED4" stroke-linecap="round" stroke-linejoin="round"/><g id="cow-head" transform="translate(210 243)"><path d="M69.503 42.97c10.316-4.092 65.313-11.8 84.278 11.538 18.966 23.338 29.747 57.425 36.445 89.559s12.479 66.044 6.24 81.165c-6.24 15.121-13.92 30.316-29.935 36.271-16.014 5.955-80.11 11.965-97.028 3.562-16.916-8.404-39.78-25.346-41.423-42.413-1.642-17.068-4.993-98.21 3.458-129.296 8.452-31.085 27.65-46.293 37.965-50.385zm74.817-.491s-4.58-32.422 4.725-35.795c9.305-3.373 22.133-1.123 22.133-1.123L144.32 42.479z" id="face-color" fill="#FFF"/><path d="M114.257 42.888c16.972 15.286-17.302 33.592-21.104 56.25-2.423 14.442 2.032 29.29 1.264 43.913-1.208 23-38.323 16.977-49.608 21.028-.952.341-16.014 15.73-21.677 11.26-2.598-2.05-5.297-99.696 34.08-123.365 27.922-16.782 57.045-9.086 57.045-9.086zM22.314 31.156c12.114.552 42.94 26.14 18.028 23.44-24.912-2.7-37.457-18.904-37.457-18.904s7.315-5.087 19.429-4.536z" id="spot-color" fill="#868C9C"/><path d="M197.5 201.528s-22.056-12.698-46.375-12.698c-24.32 0-72.934-2.913-89.531 8.937-16.597 11.851-30.052 26.535-30.052 26.535l14.055 19.886 27.67 24.427 80.337-1.698 37.587-25.68 6.309-39.71z" id="nose-color" fill="#FFD9E2"/><path d="M69.503 42.97c10.316-4.092 65.313-11.8 84.278 11.538 18.966 23.338 29.747 57.425 36.445 89.559s12.479 66.044 6.24 81.165c-6.24 15.121-13.92 30.316-29.935 36.271-16.014 5.955-80.11 11.965-97.028 3.562-16.916-8.404-39.78-25.346-41.423-42.413-1.642-17.068-4.993-98.21 3.458-129.296 8.452-31.085 27.65-46.293 37.965-50.385z" id="face-outline" stroke="#000" stroke-width="16"/><path d="M103.111 215.111s2.9 3.886 9.345 6.216l-9.345-6.216zm48.539-2.667s-3.712 4.534-7.65 5.91l7.65-5.91z" id="nose" stroke="#000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M91.055 143.292s-11.51-29.907-24.055 0m89.055-6s-11.51-29.907-24.055 0" id="closed-eyes" stroke="#000" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M143.387 150.076c-5.356.292-11.278-3.765-9.438-14.17 1.839-10.405 2.225-11.136 8.793-11.645 3.787-.294 7.403 3.303 7.403 11.871 0 8.57-1.402 13.653-6.758 13.944zm-64.854-8.636c-5.706 0-11.134-2.517-9.326-10.087 1.808-7.57 3.62-13.555 9.326-13.555s7.81 3.67 7.81 10.198c0 6.529-2.104 13.444-7.81 13.444z" id="eyes" fill="#000" transform="rotate(-10 109.499 133.944)"/><path d="M53.092 50.132l-4.068 8.472C24.195 56.222-11.673 37.452 3.708 31.76c6.557-2.426 19.271-8.105 31.382 0 12.112 8.105 13.713 12.076 18.002 18.372zm84.686-12.79c.462-12.752-.835-19.731 9.415-31.42 5.269-6.008 23.835-9.912 27.41.806 1.486 4.458-8.86 18.324-12.096 21.753-5.138 5.446-11.315 9.808-16.972 14.712l-7.757-5.85z" id="left-ear" stroke="#000" stroke-width="16"/></g><path d="M467.167 398.423c18.156 76.156-46.115-179.446-152.487-272.466 0-2.523-10.034-70.521-10.034-83.803 0-13.281 134.576 228.355 162.521 356.27zM64.997 801.074s58.5-99.195 140.519-198.433c45.087-54.554 111.87-45.164 111.87-45.164s-72.476 38.386-105.804 69.574C178.254 658.238 64.996 801.074 64.996 801.074z" id="highlight" fill="#FFF"/></g></g></svg>\n' +
        '</div>';

      // insert svg
      this.container.insertAdjacentHTML( 'beforeend', svg );
      this.container.classList.add( 'fade-in' );

      new Badge;

    }, 600);
  }

  onFail() {
    this.container.classList.add( 'fade-out' );

    setTimeout( () => {
      this.form.remove();
      this.headline.innerHTML = 'Uh oh! Your message failed to send';
      this.container.classList.add( 'fade-in' );
    }, 600);
  }

}
