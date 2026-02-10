# Canada e Academy — Website Overview

> **Total pages:** 523 Markdown files across 11 sections
> **Domain:** canadaeacademy.com
> **Platform:** WordPress / WooCommerce
> **BSID:** #665804

Canada e Academy is a Ministry-inspected Ontario online high school offering 170+ OSSD courses for Grades 7–12. The website serves domestic Ontario students, out-of-province Canadians, international students, adult learners, homeschool families, and parents. All content is produced in Markdown and follows the brand guidelines established in `canada-e-academy-system-prompt.md`.

---

## Site Architecture

```
cea-website/
├── _templates/          (7 files)   Content templates for each page type
├── core/                (10 files)  Homepage, About, FAQ, and essential pages
├── audience/            (8 files)   Landing pages by student type
├── courses/             (150 files) Course pages organised by grade and category
│   ├── grade-7/         (8)
│   ├── grade-8/         (7)
│   ├── grade-9/         (16)
│   ├── grade-10/        (20)
│   ├── grade-11/        (22)
│   ├── grade-12/        (35)
│   ├── esl/             (6)
│   ├── free/            (6)
│   ├── french-immersion/(1)
│   ├── international-languages/ (4)
│   └── upgrade/         (25)
├── student-services/    (8 files)   Guidance, transcripts, OUAC/OCAS, exams
├── policies/            (6 files)   Admissions, assessment, privacy, behaviour
├── universities/        (16 files)  Partner institution profiles
├── student-spotlights/  (91 files)  Student success stories and testimonials
├── blog/                (142 files) SEO-driven articles across 5 categories
│   ├── online-learning/ (38)
│   ├── ouac-ocas/       (15)
│   ├── post-secondary/  (30)
│   ├── student-life/    (22)
│   └── study-tips/      (36)
├── newsletters/         (65 files)  Monthly newsletters from 2019–2025
│   ├── 2019/            (5)
│   ├── 2020/            (11)
│   ├── 2021/            (12)
│   ├── 2022/            (8)
│   ├── 2023/            (10)
│   ├── 2024/            (10)
│   └── 2025/            (8)
└── podcasts/            (20 files)  Podcast episodes across 4 seasons
    ├── season-1/        (4)
    ├── season-2/        (8)
    ├── season-3/        (4)
    └── season-4/        (3)
```

---

## 1. Templates (`_templates/` — 7 files)

Reusable content blueprints that define the standard structure, front matter fields, and section headings for each page type on the site.

| File | Purpose |
|------|---------|
| `audience-page-template.md` | Structure for audience-specific landing pages |
| `blog-post-template.md` | Structure for blog articles |
| `course-page-template.md` | Structure for individual course description pages |
| `newsletter-template.md` | Structure for monthly newsletter issues |
| `podcast-episode-template.md` | Structure for podcast episode pages |
| `student-spotlight-template.md` | Structure for student success stories |
| `university-page-template.md` | Structure for university/college partner profiles |

---

## 2. Core Pages (`core/` — 10 files)

The essential, high-traffic pages that form the backbone of the site. These carry the primary SEO weight and handle the main conversion funnels.

| File | URL Path | Description |
|------|----------|-------------|
| `homepage.md` | `/` | Hero section, trust signals (Ministry-inspected, OCT-certified teachers, 25,000+ credits), value propositions, and primary CTAs |
| `about-us.md` | `/about` | School history (founded 2010), mission, team, principal's message, and all seven trust signal layers |
| `course-catalog.md` | `/courses` | Master index of 170+ courses filterable by grade (7–12), ESL, French immersion, international languages, upgrade, and free courses |
| `how-it-works.md` | `/how-it-works` | Step-by-step walkthrough of the enrolment and learning process (register → learn → complete → earn credit) |
| `faq.md` | `/faq` | Frequently asked questions covering registration, OSSD requirements, timelines, pricing, transcripts, international eligibility, and more |
| `ossd-requirements.md` | `/ossd-requirements` | Detailed OSSD graduation requirements (30 credits, 40 community hours, OSSLT), compulsory vs. elective credits, and 2024–25 curriculum updates |
| `course-coding-system.md` | `/course-coding-system` | Guide to Ontario's course code structure (e.g., what "ENG4U" means — subject, grade, pathway type) |
| `register-online.md` | `/register` | Registration and checkout page with enrolment instructions, pricing ($574 domestic / $1,224 international), and trust signals |
| `contact.md` | `/contact` | Contact form, email (info@canadaeacademy.com), phone placeholder, and live chat information |
| `sample-lessons.md` | `/sample-lessons` | Preview of the interactive animated lesson format — the school's key differentiator |

---

## 3. Audience Pages (`audience/` — 8 files)

Dedicated landing pages tailored to each distinct student segment with audience-specific messaging, benefits, and CTAs.

| File | Target Audience | Key Hook |
|------|----------------|----------|
| `ontario-day-school-students.md` | Ontario students at traditional day schools | "Earn extra credits alongside your regular school schedule" |
| `international-students.md` | Students outside Canada | "Earn a globally recognised Canadian diploma from anywhere — no study permit required" |
| `adult-mature-students.md` | Learners aged 18+ | "It's never too late to earn your Ontario high school diploma" |
| `homeschool-families.md` | Families who homeschool | "Ontario-recognised credits that complement your homeschool programme" |
| `parents-information.md` | Parents and guardians | "A trusted, Ministry-inspected alternative to classroom learning" |
| `full-time-diploma-students.md` | Students completing full OSSD online | Full diploma pathway with course planning and guidance |
| `out-of-province-students.md` | Canadian students outside Ontario | OSSD benefits for students in other provinces |
| `reach-ahead-elementary.md` | Elementary students (pre-Grade 7) | Early credit exploration and reach-ahead opportunities |

---

## 4. Courses (`courses/` — 150 files)

Individual course description pages, each following the standardised template with: course code, grade, credit value, prerequisite, Ministry-standard description, unit-by-unit outline with hours, 70%/30% assessment breakdown, and registration CTA.

### Course Counts by Grade

| Subfolder | Files | Notes |
|-----------|-------|-------|
| `grade-7/` | 8 (7 courses + index) | Non-credit middle school courses at $399 — Language, Math, Science, History, Geography, French, Health & Phys Ed |
| `grade-8/` | 7 (6 courses + index) | Non-credit middle school courses at $399 — Language, Math, Science, History, Geography, French |
| `grade-9/` | 16 (15 courses + index) | De-streamed courses (1W suffix), plus arts, French immersion, tech, and career studies |
| `grade-10/` | 20 (19 courses + index) | Academic (D) and applied (P) streams; Canadian History, Civics/Careers, English, Math, Science, Arts, Tech |
| `grade-11/` | 22 (21 courses + index) | University (U), college (C), and mixed (M) prep — includes French-language variants (uf suffix) |
| `grade-12/` | 35 (34 courses + index) | University (U), college (C), and mixed (M) prep — includes French-language variants and OSSLC (OLC4O) |

### Specialty Course Categories

| Subfolder | Files | Description |
|-----------|-------|-------------|
| `esl/` | 6 (5 courses + index) | English as a Second Language, Levels 1–5 (ESLAO–ESLEO) |
| `upgrade/` | 25 (24 courses + index) | Mark-upgrade versions of popular Grade 11–12 courses for students retaking to improve marks |
| `free/` | 6 (5 courses + index) | Complimentary preparatory courses (math prep, digital literacy, learning skills, mental health, writing prep) |
| `french-immersion/` | 1 (index only) | Landing page for French immersion course offerings |
| `international-languages/` | 4 (3 courses + index) | Mandarin (LKBBD, LKBDU) and German (LWGBO) |

---

## 5. Student Services (`student-services/` — 8 files)

Support services and resources for enrolled students.

| File | Description |
|------|-------------|
| `student-services-hub.md` | Central landing page linking to all student services |
| `guidance-counselling.md` | Academic guidance, course selection, and graduation planning |
| `transcript-requests.md` | How to request official Ontario Student Transcripts (OST) |
| `ouac-info.md` | Guide to OUAC (Ontario Universities' Application Centre) mark submission |
| `ocas-info.md` | Guide to OCAS (Ontario College Application Service) mark submission |
| `final-exams.md` | Final exam policies, scheduling, and proctoring information |
| `iep-accommodations.md` | Individual Education Plan (IEP) accommodations and accessibility support |
| `mental-health-resources.md` | Mental health support resources and crisis contacts |

---

## 6. Policies (`policies/` — 6 files)

Official school policies and regulatory documents.

| File | Description |
|------|-------------|
| `admissions.md` | Enrolment requirements, documentation, and registration process |
| `assessment-evaluation.md` | Assessment and evaluation policy aligned with the Ministry's *Growing Success* framework (70% coursework / 30% final evaluation) |
| `prerequisite-waiver.md` | Process for waiving course prerequisites |
| `privacy-policy.md` | Student data privacy and information handling policy |
| `school-course-calendar.md` | Academic calendar with key dates and course scheduling information |
| `student-code-of-behaviour.md` | Student conduct expectations and academic integrity policy |

---

## 7. Universities (`universities/` — 16 files)

Profiles of partner post-secondary institutions that Canada e Academy graduates commonly attend. Each page covers admissions requirements, programme highlights, and how OSSD credits transfer.

| File | Institution |
|------|------------|
| `index.md` | Master landing page with OUAC/OCAS submission process |
| `university-of-toronto.md` | University of Toronto |
| `university-of-waterloo.md` | University of Waterloo |
| `mcgill-university.md` | McGill University |
| `mcmaster-university.md` | McMaster University |
| `queens-university.md` | Queen's University |
| `western-university.md` | Western University |
| `york-university.md` | York University |
| `toronto-metropolitan-university.md` | Toronto Metropolitan University |
| `trent-university.md` | Trent University |
| `laurentian-university.md` | Laurentian University |
| `university-of-windsor.md` | University of Windsor |
| `george-brown-college.md` | George Brown College |
| `humber-college.md` | Humber College |
| `seneca-college.md` | Seneca College |
| `algonquin-college.md` | Algonquin College |

---

## 8. Student Spotlights (`student-spotlights/` — 91 files)

Success stories from current students and graduates. Each spotlight includes the student's name, background, programme of study, and testimonial. The index page organises spotlights into featured categories (athletes, international students, domestic students, etc.).

- **1 index page** — landing page with categorised student listings
- **90 individual spotlights** — including notable students such as:
  - **Summer McIntosh** — Olympic Gold Medalist
  - **Brooke McIntosh** — Canadian pair skater
  - **Hendrix Lapierre** — NHL first-round draft pick

Students come from diverse backgrounds — Ontario day school students, international learners, adult upgraders, competitive athletes, and homeschool families.

---

## 9. Blog (`blog/` — 142 files)

SEO-driven articles organised into five thematic categories plus a master index.

### Blog Categories

| Category | Files | Topics Covered |
|----------|-------|---------------|
| **Online Learning** (`online-learning/`) | 38 | Benefits of online education, how virtual schools work, comparisons to traditional school, Ministry inspection explained, mental health, parent guides, e-learning for athletes and mature students |
| **OUAC & OCAS** (`ouac-ocas/`) | 15 | University/college application process, OUAC 101 vs. 105 streams, midterm collections, conditional offers, de-streaming, responding to offers |
| **Post-Secondary** (`post-secondary/`) | 30 | Career pathway series (engineering, health sciences, business, computer science, humanities, social sciences, arts), scholarship advice, mark upgrading, college vs. university comparisons |
| **Student Life** (`student-life/`) | 22 | Balancing school with sports and jobs, mental health, community service hours, summer school, creating balance, digital habits, creative courses |
| **Study Tips** (`study-tips/`) | 36 | Exam preparation, note-taking strategies, essay writing, lab reports, research papers, procrastination, study spaces, digital tools, academic integrity, growth mindset, AI use in learning |
| *Index* | 1 | Master blog landing page |

---

## 10. Newsletters (`newsletters/` — 65 files)

Monthly email newsletter archives from July 2019 to December 2025, plus a master index page. Each newsletter covers school updates, new course announcements, student achievements, tips, and seasonal content.

| Year | Issues |
|------|--------|
| 2019 | 5 (July–October) |
| 2020 | 11 (Feb–Dec, excluding January) |
| 2021 | 12 (Jan–Dec — full year) |
| 2022 | 8 (March–December, partial) |
| 2023 | 10 (Jan–Nov, excluding July/August/October) |
| 2024 | 10 (Feb–Dec, excluding January/April) |
| 2025 | 8 (Feb–Dec, partial) |
| *Index* | 1 |

---

## 11. Podcasts (`podcasts/` — 20 files)

Educational podcast episodes across four seasons, plus a master index page.

| Season | Episodes | Focus |
|--------|----------|-------|
| **Season 1** | 4 | Foundations — executive functioning, mental health in online learning, mood/mindset, sleep and memory |
| **Season 2** | 8 | Learning strategies — IEPs, accommodations, note-taking, goal-setting, math and memory, online vs. in-person learning |
| **Season 3** | 4 | Skills development — adapting to school, communication skills, end-of-semester tips, thinking skills |
| **Season 4** | 3 | Post-secondary and emerging topics — AI and machine learning (TMU), getting ready for post-secondary (Queen's), listening strategies |
| *Index* | 1 | Podcast landing page with all seasons |

---

## Page Content Standards

Every page on the site follows these conventions:

- **Front matter** — YAML block with `title`, `meta_description`, and `url` fields (course pages also include `course_code`, `grade`, `course_type`, `credit_value`, `prerequisite`, `tuition_domestic`, `tuition_international`)
- **Ministry language** — "Inspected by the Ontario Ministry of Education" (never "accredited")
- **BSID #665804** — Present on all core, course, and trust signal pages
- **Assessment** — 70% coursework / 30% final evaluation (Ministry-mandated)
- **Pricing** — $574 domestic / $1,224 international (Grade 7–8: $399)
- **Spelling** — Canadian English throughout (colour, centre, programme, recognised)
- **Links** — Internal links use `canadaeacademy.com` domain

---

## Navigation Structure

```
Homepage
├── Courses
│   ├── Grade 7–12 (individual grade index pages)
│   ├── ESL Courses
│   ├── Upgrade Courses
│   ├── Free Courses
│   ├── French Immersion
│   └── International Languages
├── How It Works
├── About Us
├── Student Services
│   ├── Guidance Counselling
│   ├── Transcript Requests
│   ├── OUAC Info
│   ├── OCAS Info
│   ├── Final Exams
│   ├── IEP Accommodations
│   └── Mental Health Resources
├── Universities
├── Student Spotlights
├── For Students (Audience Pages)
│   ├── Ontario Day School Students
│   ├── International Students
│   ├── Adult / Mature Students
│   ├── Homeschool Families
│   ├── Full-Time Diploma Students
│   ├── Out-of-Province Students
│   ├── Reach Ahead (Elementary)
│   └── Parents
├── Blog
│   ├── Online Learning
│   ├── OUAC & OCAS
│   ├── Post-Secondary
│   ├── Student Life
│   └── Study Tips
├── Newsletters
├── Podcasts
├── Policies
├── FAQ
├── Contact
└── Register
```

---

*Document version: 1.0 — Generated February 9, 2026*
*523 total pages across 11 sections*
