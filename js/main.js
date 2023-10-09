; (function () {
	// // =================================BURGER================================

	; (function () {
		document.addEventListener('click', burgerinit)
		function burgerinit(e) {
			const burger = e.target.closest('.header__menu')
			const link = e.target.closest('.link')
			if (!burger && !link) return
			// if (document.documentElement.clientWidth > 900) return

			if (!document.body.classList.contains('body--opened-menu')) {
				document.body.classList.add('body--opened-menu')
			} else {
				document.body.classList.remove('body--opened-menu')
			}
		}
	})()

	// 	// ==================================MODAL==================================

	// const btn = document.querySelector('.modal-open')
	// const btnFooter = document.querySelector('.modal-open-footer')
	const array = document.querySelectorAll('.modal-open')

	const modal = document.querySelector('.body')

	const openModal = () => {
		modal.classList.add('body--modal-opened')
	}
	const closeModal = () => {
		modal.classList.remove('body--modal-opened')
	}

	array.forEach(e => {
		e.addEventListener('click', openModal)
	})
	// btn.addEventListener('click', openModal)
	// btnFooter.addEventListener('click', openModal)

	modal.addEventListener('click', event => {
		const target = event.target

		if (
			(target && target.classList.contains('modal-call')) ||
			event.target.id == 'close'
		) {
			closeModal()
		}
	})

	// ===================tel maska===================

	const telInput = document.querySelectorAll('input[type="tel"]')
	const im = new Inputmask('+7 (999) 999-99-99')
	im.mask(telInput)

	// ==============================tabs==================================

	const tabControl = document.querySelector('.tabs')

	tabControl.addEventListener('click', toogleTab)

	function toogleTab(e) {
		const tabControl = e.target.closest('.tabs__link')

		if (!tabControl) return
		e.preventDefault()
		if (tabControl.classList.contains('tabs__link--activ')) return

		const tabContentId = tabControl.getAttribute('href')
		const tabContent = document.querySelector(tabContentId)
		const activeControl = document.querySelector('.tabs__link--activ')
		const activeContent = document.querySelector('.tabs-content--show')

		if (activeContent) activeContent.classList.remove('tabs-content--show')
		if (activeControl) activeControl.classList.remove('tabs__link--activ')

		tabContent.classList.add('tabs-content--show')
		tabControl.classList.add('tabs__link--activ')
	}

	// 	// =================================ACCORDION============================


	let accordion = document.querySelector('.accordion')
	let items = accordion.querySelectorAll('.accordion__item')
	let title = accordion.querySelectorAll('.accordion__title')

	function toggleAccordion() {
		let thisItem = this.parentNode

		items.forEach(item => {
			if (thisItem == item) {
				// if this item is equal to the clicked item, open it.
				thisItem.classList.toggle('active')
				return
			}
			// otherwise, remove the open class
			item.classList.remove('active')
		})
	}

	title.forEach(question => question.addEventListener('click', toggleAccordion))




	// 	// ========================projects SLIDER============================



	const projectsSwiper = new Swiper('.projects__swiper', {
		// Optional parameters
		slidesPerView: 1,
		

		// If we need pagination
		pagination: {
			el: '.projects__pagination-fractal',
			type: 'fraction',

		},

		// Navigation arrows
		navigation: {
			nextEl: '.projects__next',
			prevEl: '.projects__prev',
		},

	});
	const pagingSwiper = new Swiper(".projects__swiper", {
		pagination: {
			el: ".projects__pagination",			

		},
	});

	projectsSwiper.controller.control = pagingSwiper;




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


})()
