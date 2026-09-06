import './style.css'
import profileImg from './assets/profile.jpg'
import medgraphImg from './assets/projects/medgraph.png'
import airlineImg from './assets/projects/airline.png'
import recipeImg from './assets/projects/recipe.png'
import walmartImg from './assets/projects/walmart.jpg'
import nlpImg from './assets/projects/nlp.png'
import obstacleImg from './assets/projects/obstacle.png'
import { datacampCourses } from './datacamp_courses'

const profileEl = document.getElementById('profile-img') as HTMLImageElement
if (profileEl) profileEl.src = profileImg

const projects = [
  {
    title: 'MedGraph-Analytics',
    subtitle: 'Graph ML & Full-Stack Biomedical Platform',
    description: 'Knowledge graph engineering with 22,635 nodes & 562,107 edges. Random Forest classifier capturing multi-hop topological features for drug repurposing.',
    image: medgraphImg,
    tags: ['Neo4j', 'FastAPI', 'Streamlit', 'Docker'],
    category: 'ml',
    github: 'https://github.com/soaer01/medgraph-analytics',
    live: 'https://medgraph-analytics-mqjjpkrx5owl6ajxd7pzvx.streamlit.app/'
  },
  {
    title: 'Video Processing Optimization',
    subtitle: 'Applied Research & Model Deployment',
    description: 'Optimized Qwen2.5-VL vision-language models on dual T4 GPUs. 3B model matched 7B accuracy (52.11% vs 51.68%) with 25% higher throughput.',
    image: nlpImg,
    tags: ['PyTorch', 'MLLM', 'JIT Engine', 'IEEE Paper'],
    category: 'cv',
    github: 'https://github.com/soaer01/nlp-multimodal-research',
    live: ''
  },
  {
    title: 'Airline Flight Analytics',
    subtitle: 'End-to-End Data Warehouse & Dashboard',
    description: 'Kimball Star Schema in PostgreSQL with 99.8% query performance improvement via B-tree indexing. Interactive Power BI executive reports.',
    image: airlineImg,
    tags: ['PostgreSQL', 'Power BI', 'DAX', 'ETL'],
    category: 'data-eng',
    github: 'https://github.com/soaer01/airline-data-warehouse-powerbi',
    live: ''
  },
  {
    title: 'Recipe Traffic Prediction',
    subtitle: 'Predictive Analytics & Business KPIs',
    description: 'Logistic Regression model achieving 76% Accuracy and 85% Precision. Defined THTRI KPI tracking content performance across 900+ recipes.',
    image: recipeImg,
    tags: ['Scikit-Learn', 'Pandas', 'EDA', 'KPIs'],
    category: 'ml',
    github: 'https://github.com/soaer01/recipe-site-traffic-prediction',
    live: ''
  },
  {
    title: 'Walmart Data Integration',
    subtitle: 'ETL & Data Architecture',
    description: 'Automated multi-format ETL pipeline processing 200,000+ records. Reduced reporting cycle from 20+ minutes to under 5 seconds.',
    image: walmartImg,
    tags: ['Python', 'Pandas', 'CSV', 'Parquet'],
    category: 'data-eng',
    github: 'https://github.com/soaer01/walmart-retail-data-pipeline',
    live: ''
  },
  {
    title: 'Real-Time Obstacle Detection',
    subtitle: 'Computer Vision Framework',
    description: 'Live YOLOv8n object tracking with distance estimation. Multi-threaded OpenCV pipeline with 4-tier proximity alert system.',
    image: obstacleImg,
    tags: ['OpenCV', 'YOLOv8', 'Threading', 'EMA'],
    category: 'cv',
    github: 'https://github.com/soaer01/realtime-obstacle-detector',
    live: ''
  }
]

const datalabProjects = [
  { title: "Classifying Emails using Llama", url: "https://www.datacamp.com/datalab/w/355046a3-a6a5-4112-8268-61d7a36c8e7e/edit", tag: "LLMs / NLP" },
  { title: "Organizing Medical Transcriptions with OpenAI API", url: "https://www.datacamp.com/datalab/w/c3867f85-db6c-4a95-9563-1af0c43e1399/edit", tag: "OpenAI / AI" },
  { title: "Building a Retail Data Pipeline", url: "https://www.datacamp.com/datalab/w/ea2f4f84-a828-4fee-aa92-75812d19902b/edit", tag: "Data Engineering" },
  { title: "Exploring London's Travel Network", url: "https://www.datacamp.com/datalab/w/b1fed36d-af5b-4278-b760-20e72521a916/edit", tag: "Network Analysis" },
  { title: "Predictive Modeling for Agriculture", url: "https://www.datacamp.com/datalab/w/afad6a8d-e0a0-4e08-9d6e-364c45a6a882/edit", tag: "Machine Learning" },
  { title: "Visualizing History of Nobel Prize Winners", url: "https://www.datacamp.com/datalab/w/dceb0960-2351-4824-ab79-dbbff9b6ea66/edit", tag: "Data Visualization" },
  { title: "Clustering Antarctic Penguin Species", url: "https://www.datacamp.com/datalab/w/261cb326-3df1-492d-96e0-cf43095eff60/edit", tag: "Unsupervised ML" },
  { title: "Golden Era of Video Games Analytics", url: "https://www.datacamp.com/datalab/w/2bce30e7-4a57-4cb4-aca0-fccafc0b20a6/edit", tag: "SQL Analytics" },
  { title: "Modeling Car Insurance Claim Outcomes", url: "https://www.datacamp.com/datalab/w/f5b81f15-3807-446a-a6a0-108ccac3c678/edit", tag: "Classification" },
  { title: "Exploring Airbnb Market Trends", url: "https://www.datacamp.com/datalab/w/bb1a7633-0225-4c8d-97d3-2a481415bbb2/edit", tag: "EDA / Wrangling" },
  { title: "Exploring NYC Public School Test Scores", url: "https://www.datacamp.com/datalab/w/6ae649ef-9c9f-4893-a2fc-7188435fe264/edit", tag: "Statistical Analysis" },
  { title: "Investigating Netflix Movies & Trends", url: "https://www.datacamp.com/datalab/w/83878a08-4770-46b9-adcc-a343a523cb36/edit", tag: "Python EDA" },
  { title: "Analyzing Students' Mental Health Data", url: "https://www.datacamp.com/datalab/w/96965071-a519-46eb-9a78-2d0021eaf2dc/edit", tag: "SQL & Analytics" },
  { title: "Hypothesis Testing: Soccer Matches Data", url: "https://www.datacamp.com/datalab/w/a4f0da1c-b9d9-4088-b224-fa2d7cd4d45a/edit", tag: "Hypothesis Testing" },
  { title: "Customer Analytics: Data Preparation", url: "https://www.datacamp.com/datalab/w/17b06ddc-7d22-479f-ae89-a9144155d453/edit", tag: "Feature Engineering" },
  { title: "Predicting Movie Rental Durations", url: "https://www.datacamp.com/datalab/w/da29ce56-fc9c-41fa-b3ca-577275e83023/edit", tag: "Regression ML" },
  { title: "Soccer Insights for Sports Media Agency", url: "https://www.datacamp.com/datalab/w/a7599e44-9c20-4f4c-971c-aa2b22dc495b/edit", tag: "Sports Analytics" },
  { title: "Analyzing Crime Trends in Los Angeles", url: "https://www.datacamp.com/datalab/w/42617d8d-1ab6-4840-ab71-e68d2796feb1/edit", tag: "Geospatial EDA" }
]

function renderProjects(filter: string) {
  const grid = document.getElementById('projects-grid')
  if (!grid) return
  grid.innerHTML = ''
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)
  filtered.forEach((p, i) => {
    const card = document.createElement('div')
    card.className = 'project-card reveal-up animate-in'
    card.style.animationDelay = `${i * 100}ms`
    card.setAttribute('data-category', p.category)
    const linksHtml = [
      p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>Code</a>` : '',
      p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="project-link"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>Live Demo</a>` : ''
    ].filter(Boolean).join('')
    card.innerHTML = `
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="project-img-overlay"></div>
      </div>
      <div class="project-content">
        <div class="flex flex-wrap gap-2 mb-3">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h3 class="text-white font-semibold text-lg mb-1">${p.title}</h3>
        <p class="text-accent-400 text-sm font-medium mb-2">${p.subtitle}</p>
        <p class="text-slate-400 text-sm leading-relaxed">${p.description}</p>
        <div class="project-links">${linksHtml}</div>
      </div>
    `
    grid.appendChild(card)
  })
  observeElements()
}

let showAllDatalab = false

function renderDatalabProjects() {
  const grid = document.getElementById('datalab-grid')
  const toggleBtn = document.getElementById('toggle-datalab-btn')
  if (!grid) return
  grid.innerHTML = ''
  const items = showAllDatalab ? datalabProjects : datalabProjects.slice(0, 6)
  items.forEach((p, i) => {
    const card = document.createElement('div')
    card.className = 'datalab-card reveal-up animate-in'
    card.style.animationDelay = `${(i % 6) * 80}ms`
    card.innerHTML = `
      <div class="flex items-start justify-between mb-3">
        <span class="skill-tag text-xs">${p.tag}</span>
        <a href="${p.url}" target="_blank" rel="noopener" class="text-slate-400 hover:text-accent-400 transition-colors p-1" title="Open Workspace">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
      <h4 class="text-white font-medium text-base mb-2 hover:text-accent-400 transition-colors">
        <a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>
      </h4>
      <p class="text-slate-500 text-xs flex items-center gap-1 mt-auto pt-2">
        <svg class="w-3.5 h-3.5 text-accent-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.946 18.151v-5.239L21.209 8.2 19.2 7.048l-6.254 3.567V5.376l-2.009-1.15v14.074l-7.28-4.144-1.989 1.15 9.268 5.282 1.1-.628-.002-.004 1.003-.572-.002-.003 8.836-5.022L19.862 13l-6.916 3.937v1.214zm-2.009-9.968L3.674 12.9l2.009 1.152 5.254-2.994v4.091l2.009 1.15V2.226L5.685 6.937l2.009 1.153 3.243-1.849v1.942z"/></svg>
        DataCamp DataLab Workspace
      </p>
    `
    grid.appendChild(card)
  })

  if (toggleBtn) {
    toggleBtn.textContent = showAllDatalab ? 'Collapse DataLab Projects' : 'Show All DataLab Projects'
  }
  observeElements()
}

function setupDatalabToggle() {
  const toggleBtn = document.getElementById('toggle-datalab-btn')
  toggleBtn?.addEventListener('click', () => {
    showAllDatalab = !showAllDatalab
    renderDatalabProjects()
  })
}

let showAllCourses = false
let currentCourseQuery = ''
let currentCourseCategory = 'all'

function renderCourses() {
  const grid = document.getElementById('courses-grid')
  const toggleBtn = document.getElementById('toggle-courses-btn')
  if (!grid) return
  grid.innerHTML = ''

  let filtered = datacampCourses
  if (currentCourseCategory !== 'all') {
    filtered = filtered.filter(c => c.category === currentCourseCategory)
  }
  if (currentCourseQuery) {
    const q = currentCourseQuery.toLowerCase()
    filtered = filtered.filter(c => c.title.toLowerCase().includes(q))
  }

  const limit = (showAllCourses || currentCourseQuery) ? filtered.length : 12
  const visibleCourses = filtered.slice(0, limit)

  visibleCourses.forEach((c) => {
    const card = document.createElement('div')
    card.className = 'course-card reveal-up animate-in'
    const catLabel = c.category === 'ai' ? 'AI & LLMs' : c.category === 'data-eng' ? 'Data Eng' : c.category === 'ml' ? 'Machine Learning' : 'Data Analysis'
    card.innerHTML = `
      <div class="flex items-start justify-between gap-2 mb-2">
        <span class="skill-tag text-xs">${catLabel}</span>
        <span class="text-emerald-400 text-xs flex items-center gap-1 font-medium">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>Completed
        </span>
      </div>
      <h4 class="text-white font-medium text-sm mb-3 leading-snug hover:text-accent-400 transition-colors">
        <a href="${c.url}" target="_blank" rel="noopener">${c.title}</a>
      </h4>
      <a href="${c.url}" target="_blank" rel="noopener" class="text-accent-400 hover:text-white transition-colors text-xs font-medium inline-flex items-center gap-1.5 mt-auto pt-2 border-t border-white/5">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
        Statement of Accomplishment
      </a>
    `
    grid.appendChild(card)
  })

  if (toggleBtn) {
    if (filtered.length <= 12 || currentCourseQuery) {
      toggleBtn.style.display = 'none'
    } else {
      toggleBtn.style.display = 'inline-flex'
      toggleBtn.textContent = showAllCourses ? 'Collapse Course List' : 'Show All Courses'
    }
  }
  observeElements()
}

function setupCourseControls() {
  const searchInput = document.getElementById('course-search') as HTMLInputElement
  const toggleBtn = document.getElementById('toggle-courses-btn')
  const catButtons = document.querySelectorAll<HTMLButtonElement>('.course-cat-btn')

  searchInput?.addEventListener('input', (e) => {
    currentCourseQuery = (e.target as HTMLInputElement).value
    renderCourses()
  })

  toggleBtn?.addEventListener('click', () => {
    showAllCourses = !showAllCourses
    renderCourses()
  })

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      currentCourseCategory = btn.dataset.courseCat || 'all'
      renderCourses()
    })
  })
}

function setupFilters() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.filter-btn:not(.course-cat-btn)')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      renderProjects(btn.dataset.filter || 'all')
    })
  })
}

function setupNavScroll() {
  const navbar = document.getElementById('navbar')
  const sections = document.querySelectorAll<HTMLElement>('section[id]')
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('#nav-links .nav-link')

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50)
    }
    let current = ''
    sections.forEach(section => {
      const top = section.offsetTop - 100
      if (window.scrollY >= top) {
        current = section.getAttribute('id') || ''
      }
    })
    navLinks.forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active')
      }
    })
  })
}

function setupMobileNav() {
  const toggle = document.getElementById('nav-toggle')
  const menu = document.getElementById('mobile-menu')
  const links = menu?.querySelectorAll<HTMLAnchorElement>('.mobile-link')

  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('hidden')
    toggle.classList.toggle('nav-open')
  })

  links?.forEach(link => {
    link.addEventListener('click', () => {
      menu?.classList.add('hidden')
      toggle?.classList.remove('nav-open')
    })
  })
}

function setupSmoothScroll() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href') || '')
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el))
}

function animateCounters() {
  const counters = document.querySelectorAll<HTMLElement>('.stat-number[data-target]')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement
        const target = parseInt(el.dataset.target || '0')
        let current = 0
        const increment = target / 40
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            el.textContent = target.toString()
            clearInterval(timer)
          } else {
            el.textContent = Math.floor(current).toString()
          }
        }, 30)
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.5 })

  counters.forEach(counter => observer.observe(counter))
}

function typeWriter() {
  const el = document.getElementById('hero-subtitle')
  if (!el) return
  const text = 'Building end-to-end data pipelines, graph ML platforms, and real-time computer vision systems — from raw data to deployed intelligence.'
  let i = 0
  const cursor = document.createElement('span')
  cursor.className = 'typing-cursor'
  el.appendChild(cursor)
  function type() {
    if (i < text.length) {
      el!.insertBefore(document.createTextNode(text.charAt(i)), cursor)
      i++
      setTimeout(type, 18)
    }
  }
  setTimeout(type, 600)
}

function setupContactForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement
  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = form.querySelector('button[type="submit"]')
    if (btn) {
      btn.textContent = 'Message Sent!'
      btn.classList.add('opacity-75')
      setTimeout(() => {
        btn.textContent = 'Send Message'
        btn.classList.remove('opacity-75')
        form.reset()
      }, 2500)
    }
  })
}

renderProjects('all')
renderDatalabProjects()
setupDatalabToggle()
renderCourses()
setupCourseControls()
setupFilters()
setupNavScroll()
setupMobileNav()
setupSmoothScroll()
observeElements()
animateCounters()
typeWriter()
setupContactForm()
