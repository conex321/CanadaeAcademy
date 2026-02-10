# Project Vision & Constitution

> **AGENT INSTRUCTION:** Read this file before every iteration. It serves as the project's "Long-Term Memory." If `next-prompt.md` is empty, pick the highest priority item from Section 5 OR invent a new page that fits the project vision.

## 1. Core Identity
* **Project Name:** Canonet (Canada e Academy)
* **Stitch Project ID:** `10002235456933157342`
* **Mission:** Canada's interactive online high school — offering 170+ OSSD credit courses for Grades 7-12, inspected by the Ontario Ministry of Education (BSID #665804), with OCT-certified teachers and professionally animated lessons.
* **Target Audience:** Ontario day school students, full-time diploma seekers, international students (no study permit required), mature/adult learners (18+), homeschool families, out-of-province students, and parents.
* **Voice:** Modern, trustworthy, empowering, professional, and warm. Specific data over vague claims. Student-centered outcomes. Ministry-precise trust language.

## 2. Visual Language (Stitch Prompt Strategy)
*Strictly adhere to these descriptive rules when prompting Stitch. Reference DESIGN.md for the full design system.*

* **The "Vibe" (Adjectives):**
    * *Primary:* **Modern** — Clean lines, generous whitespace, contemporary web patterns, premium micro-interactions
    * *Secondary:* **Trustworthy** — Authoritative deep blues, layered trust signals, precise Ministry language, heritage messaging
    * *Tertiary:* **Canadian** — Red accents echoing the national flag, maple leaf motifs, proudly Canadian identity

* **Color Philosophy (Semantic):**
    * **Primary:** Authoritative Deep Blue (#2c3892) for CTAs, nav, headers, trust badges
    * **Secondary:** Canadian Red (#ed1c23) for Register CTAs, urgency, maple leaf accents
    * **Backgrounds:** Clean White (#ffffff) main, Soft Cool Gray (#f5f7fa) alternating sections
    * **Text:** Near Black (#1a1a2e) headlines, Warm Gray (#6b7280) body

## 3. Architecture & File Structure
* **Root:** `site/public/`
* **Asset Flow:** Stitch generates to `queue/` -> Validate -> Move to `site/public/`
* **Navigation Strategy:**
    * **Global Header:** Logo (maple leaf + text) | Courses | How It Works | About | Student Services | Contact | **[Register Now]** (red CTA)
    * **Global Footer:** Deep Blue background, white text. Logo + tagline "Your Path. Your Pace. Your Future." | Ministry inspection statement + BSID #665804 | Quick links (Courses, About, FAQ, Contact, Register) | Social links | info@canadaeacademy.com

## 4. Live Sitemap (Current State)
*The Agent MUST update this section when a new page is successfully merged.*

* [x] `index.html` - Homepage with hero, trust signals, value props, audience paths, university logos
* [x] `about.html` - Brand story, differentiators, mission/vision, stats, reviews
* [x] `how-it-works.html` - 6-step enrollment and learning process guide
* [x] `courses.html` - Course catalog with grade filters, pricing, ESL section
* [x] `faq.html` - Comprehensive Q&A across 7 categories
* [ ] `contact.html` - Multi-channel contact form, live chat, guidance booking
* [ ] `register.html` - Registration process, pricing, requirements
* [ ] `ossd-requirements.html` - OSSD graduation pathway reference
* [ ] `sample-lessons.html` - Interactive lesson showcase and demo
* [ ] `course-codes.html` - Ontario course coding system reference

## 5. The Roadmap (Backlog)
*If `next-prompt.md` is empty or completed, pick the next task from here.*

### High Priority
- [ ] **Homepage (index.html):** Hero with "Your Diploma. Your Pace. Your Future.", trust bar (Ministry + BSID + OCT + 25K students + 100+ countries), Why Choose Us cards, How It Works steps, university logos, audience path cards, social proof, footer
- [ ] **About Us (about.html):** Our Story (founded 2010), What Makes Us Different (4 pillars), How We Work (7 steps), mission/vision, By the Numbers stats table, student reviews
- [ ] **How It Works (how-it-works.html):** 6-step guide (Choose Course > Register > Start Learning > Submit Assessments > Final Evaluation > Earn Credit), timeline table (fast-track/standard/extended), tech requirements
- [ ] **Course Catalog (courses.html):** Grade filter navigation (7-12 + ESL + Upgrade + Free), course tables by grade with codes/names/types/prereqs, tuition table, CTAs
- [ ] **FAQ (faq.html):** 7 categories (About CeA, Enrolment, Course Experience, OSSD & Graduation, Transcripts & University, International Students, Technical), accordion-style expandable answers

### Medium Priority
- [ ] **Contact (contact.html):** Contact info (email, phone, address), 3-step contact form, live chat, guidance appointment booking, social media links
- [ ] **Register (register.html):** 5-step registration process, tuition table ($574/$1,224), requirements for all students and international students, important policies, support pathways
- [ ] **OSSD Requirements (ossd-requirements.html):** What is OSSD, graduation requirements (30 credits, 40 hours, literacy), compulsory credit tables (pre-2024 and 2024+), literacy requirement, community involvement
- [ ] **Sample Lessons (sample-lessons.html):** Lesson feature showcase (animation, narration, quizzes, resources), preview CTAs linking to course pages, student testimonials about lesson quality
- [ ] **Course Codes (course-codes.html):** How to read a 5-character course code, grade level table, course type tables (Grades 9-10 and 11-12), subject area code reference table

## 6. Creative Freedom Guidelines
*When the backlog is empty, follow these guidelines to innovate.*

1. **Stay On-Brand:** New pages must fit the "Modern + Trustworthy + Canadian" vibe
2. **Enhance the Core:** Support the student enrollment journey and build trust
3. **Naming Convention:** Use lowercase, descriptive filenames
4. **Brand Rules:** Always use "inspected" (never "accredited"), include BSID #665804, use $574/$1,224 pricing

### Ideas to Explore (Future Phases)
*Pick one, build it, then REMOVE it from this list.*

- [ ] `ontario-students.html` - Dedicated landing page for Ontario day school students
- [ ] `international-students.html` - International student landing page (no study permit, OUAC 101 advantage)
- [ ] `adult-learners.html` - Mature/adult student landing page
- [ ] `homeschool.html` - Homeschool family landing page
- [ ] `student-spotlights.html` - Featured student success stories
- [ ] `blog.html` - Blog/resource hub for SEO content
- [ ] `guidance.html` - Guidance counselling services page
- [ ] `transcripts.html` - Transcript request and OUAC/OCAS submission info

## 7. Rules of Engagement
1. Do not recreate pages in Section 4 that are already marked `[x]`
2. Always update `next-prompt.md` before completing an iteration
3. Consume ideas from Section 6 when you use them
4. Keep the loop moving — every iteration must produce a page
5. Always include the DESIGN SYSTEM block from DESIGN.md Section 6 in every baton prompt
6. Wire navigation links to existing pages — no placeholder `href="#"` for built pages
7. Every page footer must include: Ministry inspection statement, BSID #665804, contact info
8. Never use "accredited" — only "inspected by the Ontario Ministry of Education"
