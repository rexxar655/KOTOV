;(function () {
	// // =================================BURGER================================

	function burgerMenu(selector) {
		let menu = $(selector)
		let button = menu.find('.burger-btn')
		let links = menu.find('.header__link')
		let overlay = menu.find('.burger-menu_overlay')

		button.on('click', e => {
			e.preventDefault()
			toggleMenu()
		})

		links.on('click', () => toggleMenu())
		overlay.on('click', () => toggleMenu())

		function toggleMenu() {
			menu.toggleClass('burger-menu_active')

			if (menu.hasClass('burger-menu_active')) {
				$('body').css('overlow', 'hidden')
			} else {
				$('body').css('overlow', 'visible')
			}
		}
	}

	burgerMenu('.body')

	

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
		console.log(tabContentId)
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
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>'
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: '.projects__next',
			prevEl: '.projects__prev',
		},
	})
	const pagingSwiper = new Swiper('.projects__swiper', {
		pagination: {
			el: '.projects__pagination',
		},
	})

	projectsSwiper.controller.control = pagingSwiper

	// ===========================================projects-tabs to slide============

	projectsSwiper.on('slideChange', function () {
		let i = this.realIndex + 1

		const tabContentId = '#tab_' + i
		const tabContent = document.querySelector(tabContentId)
		const activeControl = document.querySelector('.projects__tab--active')
		const activeContent = document.querySelector('.projects__tab--show')
		// console.log(tabContentId)

		if (activeContent) activeContent.classList.remove('projects__tab--show')
		if (activeControl) activeControl.classList.remove('projects__tab--active')

		tabContent.classList.add('projects__tab--show')
	})

	// ============================clients__swiper=======================

	const clientsSwiper = new Swiper('.clients__swiper', {
		// Optional parameters

		breakpoints: {
			// when window width is >= 450px
			0: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			450: {
				slidesPerView: 1.2,
				spaceBetween: 8,
			},

			601: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},

			920: {
				slidesPerView: 2.2,
				spaceBetween: 32,
			},
		},
	})

	// ==============================main tabs order==================================

	const tabOrder = document.querySelectorAll('.order__nav')

	tabOrder.forEach(e => {
		e.addEventListener('click', toogleTabOrder)
	})

	function toogleTabOrder(e) {
		const tabOrder = e.target.closest('.order__nav-link')

		if (!tabOrder) return
		e.preventDefault()
		if (tabOrder.classList.contains('order__nav-link--activ')) return

		const tabContentId = tabOrder.getAttribute('href')
		const tabContent = document.querySelector(tabContentId)
		const activeControl = document.querySelector('.order__nav-link--activ')
		const activeContent = document.querySelector('.order__content--show')

		if (activeContent) activeContent.classList.remove('order__content--show')
		if (activeControl) activeControl.classList.remove('order__nav-link--activ')

		tabContent.classList.add('order__content--show')
		tabOrder.classList.add('order__nav-link--activ')
	}

	// ===========================orders tab=====================

	const ordersTabControl = document.querySelector('.order__tabs')

	ordersTabControl.addEventListener('click', toogleOrdersTab)

	function toogleOrdersTab(e) {
		const ordersTabControl = e.target.closest('.order__tabs-link')

		if (!ordersTabControl) return
		e.preventDefault()
		if (ordersTabControl.classList.contains('order__tabs-link--activ')) return

		const tabContentId = ordersTabControl.getAttribute('href')
		const tabContent = document.querySelector(tabContentId)
		const activeControl = document.querySelector('.order__tabs-link--activ')
		const activeContent = document.querySelector('.order__tabs-content--show')

		if (activeContent)
			activeContent.classList.remove('order__tabs-content--show')
		if (activeControl) activeControl.classList.remove('order__tabs-link--activ')

		tabContent.classList.add('order__tabs-content--show')
		ordersTabControl.classList.add('order__tabs-link--activ')
	}

	// ===============================select accent=========================

	// ==============form_one=====
	const form_one = document.querySelectorAll('.form_one')

	form_one.forEach(e => {
		e.addEventListener('click', toogleForm_one)
	})

	function toogleForm_one(e) {
		const form_one = e.target.closest('.select__btns-link')

		if (!form_one) return
		e.preventDefault()
		if (form_one.classList.contains('form_one--activ')) return

		const activeControl = document.querySelector('.form_one--activ')

		if (activeControl) activeControl.classList.remove('form_one--activ')

		form_one.classList.add('form_one--activ')
	}

	// ==============form_two=====
	const form_two = document.querySelectorAll('.form_two')

	form_two.forEach(e => {
		e.addEventListener('click', toogleForm_two)
	})

	function toogleForm_two(e) {
		const form_two = e.target.closest('.select__btns-link')

		if (!form_two) return
		e.preventDefault()
		if (form_two.classList.contains('form_two--activ')) return

		const activeControl = document.querySelector('.form_two--activ')

		if (activeControl) activeControl.classList.remove('form_two--activ')

		form_two.classList.add('form_two--activ')
	}

	// ==============form_three=====
	const form_three = document.querySelectorAll('.form_three')

	form_three.forEach(e => {
		e.addEventListener('click', toogleForm_three)
	})

	function toogleForm_three(e) {
		const form_three = e.target.closest('.select__btns-link')

		if (!form_three) return
		e.preventDefault()
		if (form_three.classList.contains('form_three--activ')) return

		const activeControl = document.querySelector('.form_three--activ')

		if (activeControl) activeControl.classList.remove('form_three--activ')

		form_three.classList.add('form_three--activ')
	}
})()
