document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const { hero, features, testimonials, pricing } = data;

            // Hero Section
            document.getElementById('hero-headline').textContent = hero.headline;
            document.getElementById('hero-subheadline').textContent = hero.subheadline;
            document.getElementById('cta-button-1').textContent = hero.ctaButtons[0].text;
            document.getElementById('cta-button-1').href = hero.ctaButtons[0].link;
            document.getElementById('cta-button-2').textContent = hero.ctaButtons[1].text;
            document.getElementById('cta-button-2').href = hero.ctaButtons[1].link;

            // Features Section
            const featureList = document.getElementById('feature-list');
            features.forEach(feature => {
                const featureItem = document.createElement('div');
                featureItem.classList.add('feature-item', 'bg-white', 'shadow-md', 'rounded', 'p-6', 'm-4', 'w-80', 'text-center');
                featureItem.innerHTML = `
                    <img src="${feature.icon}" alt="${feature.title}" class="mb-4 mx-auto">
                    <h3 class="text-2xl font-bold">${feature.title}</h3>
                    <p>${feature.description}</p>`;
                featureList.appendChild(featureItem);
            });

            // Testimonials Section
            const testimonialList = document.getElementById('testimonial-list');
            testimonials.forEach(testimonial => {
                const testimonialItem = document.createElement('div');
                testimonialItem.classList.add('testimonial-item', 'bg-white', 'shadow-md', 'rounded', 'p-6', 'm-4', 'w-80', 'text-center');
                testimonialItem.innerHTML = `
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="mb-4 rounded-full mx-auto">
                    <p class="italic">"${testimonial.feedback}"</p>
                    <p class="font-bold mt-4">- ${testimonial.name}</p>`;
                testimonialList.appendChild(testimonialItem);
            });

            // Pricing Section
            const pricingList = document.getElementById('pricing-list');
            pricing.forEach(plan => {
                const pricingItem = document.createElement('div');
                pricingItem.classList.add('pricing-item', 'bg-white', 'shadow-md', 'rounded', 'p-6', 'm-4', 'w-80', 'text-center');
                pricingItem.innerHTML = `
                    <h3 class="text-2xl font-bold">${plan.plan}</h3>
                    <p class="text-lg mt-2">${plan.price}</p>
                    <ul class="mt-4 list-disc list-inside">
                        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>`;
                pricingList.appendChild(pricingItem);
            });
        })
        .catch(error => console.error('Error loading data:', error));
});
