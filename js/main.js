// // ====================BURGER================================
// ; (function () {
// 	const burger = document.querySelector('.burger__icon')
// 	const body = document.querySelector('.body')

// 	burger.addEventListener('click', () => {
// 		body.classList.toggle('body--opened-menu')
// 	})

// 	const link = document.querySelector('.head__list')

// 	link.addEventListener('click', () => {
// 		body.classList.remove('body--opened-menu')
// 	})
// 	// (function(){
// 	//     document.addEventListener('click', burgerinit)
// 	//     function burgerinit(e) {
// 	//         const burger = e.target.closest('.burger__icon')
// 	//         const link = e.target.closest('.head__link')
// 	//         if(!burger && !link) return
// 	//         if (document.documentElement.clientWidth > 900) return
// 	//         if(!document.body.classList.contains('body--opened-menu')){
// 	//             document.body.classList.add('body--opened-menu')
// 	//         } else {
// 	//             document.body.classList.remove('body--opened-menu')
// 	//         }
// 	//     }
// 	// })()

// 	// ==================================MODAL==================================

// 	// const modalbtn = document.querySelector('.our-school__gift-link')
// 	// const bodymodal = document.querySelector('.body')

// 	// modalbtn.addEventListener('click', () => {

// 	// 	bodymodal.classList.toggle('body--modal-opened')
// 	// })

// 	// const modalClosebtn = document.querySelector('.gift__close-btn')

// 	// modalClosebtn.addEventListener('click', () => {
// 	//     bodymodal.classList.remove('body--modal-opened')
// 	// })

// 	const btn = document.querySelector('.our-school__gift-link')
// 	const modal = document.querySelector('.body')

// 	const openModal = () => {
// 		modal.classList.add('body--modal-opened')
// 	}
// 	const closeModal = () => {
// 		modal.classList.remove('body--modal-opened')
// 	}
// 	btn.addEventListener('click', openModal)

// 	modal.addEventListener('click', event => {
// 		const target = event.target

// 		if (
// 			(target && target.classList.contains('gift')) ||
// 			event.target.id == 'close'
// 		) {
// 			closeModal()
// 		}
// 	})

// 	// ==============================tabs==================================

// 	const tabControl = document.querySelector('.tabs')

// 	tabControl.addEventListener('click', toogleTab)

// 	function toogleTab(e) {
// 		const tabControl = e.target.closest('.tabs__link')

// 		if (!tabControl) return
// 		e.preventDefault()
// 		if (tabControl.classList.contains('tabs__link--activ')) return

// 		const tabContentId = tabControl.getAttribute('href')
// 		const tabContent = document.querySelector(tabContentId)
// 		const activeControl = document.querySelector('.tabs__link--activ')
// 		const activeContent = document.querySelector('.tabs-content--show')

// 		if (activeContent) activeContent.classList.remove('tabs-content--show')
// 		if (activeControl) activeControl.classList.remove('tabs__link--activ')

// 		tabContent.classList.add('tabs-content--show')
// 		tabControl.classList.add('tabs__link--activ')
// 	}

// 	// =================================ACCORDION============================

// 	const accordionLists = document.querySelectorAll('.accordion-list');

// 	accordionLists.forEach(el => {

// 		el.addEventListener('click', (e) => {

// 			const accordionList = e.currentTarget
// 			const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
// 			const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

// 			const accordionControl = e.target.closest('.accordion-list__control');
// 			if (!accordionControl) return
// 			e.preventDefault()
// 			const accordionItem = accordionControl.parentElement;
// 			const accordionContent = accordionControl.nextElementSibling;

// 			if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
// 				accordionOpenedItem.classList.remove('accordion-list__item--opened');
// 				accordionOpenedContent.style.maxHeight = null;
// 			}
// 			accordionItem.classList.toggle('accordion-list__item--opened');

// 			if (accordionItem.classList.contains('accordion-list__item--opened')) {
// 				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
// 			} else {
// 				accordionContent.style.maxHeight = null;
// 			}

// 		});

// 	});



// 	// ========================SLIDER-gallery============================

// 	const swiper = new Swiper('.gallery__swiper', {
// 		// Optional parameters
// 		spaceBetween: 15,
// 		slidesPerView: 1.5,

// 		// If we need pagination
// 		pagination: {
// 			el: '.gallery__pagination',
// 			type: 'fraction',
// 		},

// 		// Navigation arrows
// 		navigation: {
// 			nextEl: '.gallery__next',
// 			prevEl: '.gallery__prev',
// 		},
// 		breakpoints: {
// 			// when window width is >= 450px
// 			450: {
// 				slidesPerView: 2,
// 				spaceBetween: 15,
// 			},

// 			650: {
// 				slidesPerView: 3,
// 				spaceBetween: 25,
// 			},

// 			1101: {
// 				slidesPerView: 4,
// 				spaceBetween: 32,
// 			}
// 		}
// 	})

// 	// ==============slider comment====================


// 	new Swiper('.comment__slider', {
// 		// Optional parameters
// 		spaceBetween: 0,
// 		slidesPerView: 2,
// 		centeredSlides: true,
// 		loop: true,



// 		// Navigation arrows
// 		navigation: {
// 			nextEl: '.comment__next',
// 			prevEl: '.comment__prev',
// 		},

// 		scrollbar: {
// 			el: '.swiper-scrollbar',
			
// 		},
// 		breakpoints: {
// 			// when window width is >= 450px
// 			0: {
// 				slidesPerView: 1,
// 				spaceBetween: 0,
// 			},

// 			901: {
// 				slidesPerView: 1.5,
// 				spaceBetween: 0,
// 			},

// 			1201: {
// 				slidesPerView: 2,
// 				spaceBetween: 0,
// 			}
// 		}

// 	});


// 	// ===================tel maska===================

// 	const telInput = document.querySelectorAll('input[type="tel"]')
// 	const im = new Inputmask('+7 (999) 999-99-99')
// 	im.mask(telInput)

// })()