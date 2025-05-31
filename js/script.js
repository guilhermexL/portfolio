// Theme Toggle Functionality
class ThemeManager {
	constructor() {
		this.themeToggle = document.getElementById('themeToggle');
		this.themeIcon = this.themeToggle.querySelector('.theme-icon');
		this.currentTheme = this.getStoredTheme() || this.getPreferredTheme();
		this.init();
	}

	init() {
		// Set initial theme
		this.setTheme(this.currentTheme);

		// Add event listener
		this.themeToggle.addEventListener('click', () => {
			this.toggleTheme();
		});

		// Listen for system theme changes
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			if (!this.getStoredTheme()) {
				this.setTheme(e.matches ? 'dark' : 'light');
			}
		});
	}

	getStoredTheme() {
		return localStorage.getItem('theme');
	}

	getPreferredTheme() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	setTheme(theme) {
		this.currentTheme = theme;
		document.documentElement.setAttribute('data-theme', theme);
		this.updateThemeIcon(theme);
		localStorage.setItem('theme', theme);
	}

	toggleTheme() {
		const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
		this.setTheme(newTheme);
	}

	updateThemeIcon(theme) {
		this.themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
	}
}

// Smooth scrolling for navigation links
class SmoothScroll {
	constructor() {
		this.init();
	}

	init() {
		// Add smooth scrolling to all anchor links
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', (e) => {
				e.preventDefault();
				const target = document.querySelector(anchor.getAttribute('href'));
				if (target) {
					const headerHeight = document.querySelector('.header').offsetHeight;
					const targetPosition = target.offsetTop - headerHeight - 20;
					window.scrollTo({
						top: targetPosition,
						behavior: 'smooth'
					});
				}
			});
		});
	}
}

// Header scroll effect
class HeaderScroll {
	constructor() {
		this.header = document.querySelector('.header');
		this.init();
	}

	init() {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				this.header.style.backgroundColor = 'var(--bg-primary)';
				this.header.style.boxShadow = 'var(--shadow-light)';
			} else {
				this.header.style.backgroundColor = 'var(--bg-primary)';
				this.header.style.boxShadow = 'none';
			}
		});
	}
}

// Intersection Observer for animations
class AnimationObserver {
	constructor() {
		this.init();
	}

	init() {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = '1';
					entry.target.style.transform = 'translateY(0)';
				}
			});
		}, observerOptions);

		// Observe project cards
		document.querySelectorAll('.project-card').forEach(card => {
			card.style.opacity = '0';
			card.style.transform = 'translateY(20px)';
			card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
			observer.observe(card);
		});
	}
}

// Copy email functionality
class EmailCopy {
	constructor() {
		this.init();
	}

	init() {
		const emailLink = document.querySelector('a[href^="mailto:"]');
		if (emailLink) {
			emailLink.addEventListener('click', (e) => {
				e.preventDefault();
				const email = emailLink.href.replace('mailto:', '');
				if (navigator.clipboard) {
					navigator.clipboard.writeText(email).then(() => {
						this.showCopyFeedback(emailLink);
					});
				} else {
					// Fallback for older browsers
					window.location.href = emailLink.href;
				}
			});
		}
	}

	showCopyFeedback(element) {
		const originalText = element.querySelector('span:last-child').textContent;
		element.querySelector('span:last-child').textContent = 'Email copied!';
		setTimeout(() => {
			element.querySelector('span:last-child').textContent = originalText;
		}, 2000);
	}
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	new ThemeManager();
	new SmoothScroll();
	new HeaderScroll();
	new AnimationObserver();
	new EmailCopy();
});

// Add loading animation
window.addEventListener('load', () => {
	document.body.style.opacity = '1';
});

// Initial body opacity for loading effect
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';
