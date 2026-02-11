-- Seed: Insert all available courses
-- Apply via Supabase Dashboard SQL Editor AFTER creating tables

INSERT INTO courses (code, name, grade, pathway, category, price_domestic, price_international, is_free) VALUES
-- Grade 12
('MHF4U', 'Advanced Functions', 'Grade 12', 'University', 'Grade 12', 57400, 122400, false),
('MCV4U', 'Calculus and Vectors', 'Grade 12', 'University', 'Grade 12', 57400, 122400, false),
('SCH4U', 'Chemistry', 'Grade 12', 'University', 'Grade 12', 57400, 122400, false),
('SPH4U', 'Physics', 'Grade 12', 'University', 'Grade 12', 57400, 122400, false),
('SBI4U', 'Biology', 'Grade 12', 'University', 'Grade 12', 57400, 122400, false),
('ENG4U', 'English', 'Grade 12', 'University', 'Grade 12', 57400, 122400, false),
('MDM4U', 'Mathematics of Data Management', 'Grade 12', 'University', 'Grade 12', 57400, 122400, false),
('BOH4M', 'Business Leadership', 'Grade 12', 'University/College', 'Grade 12', 57400, 122400, false),
('CIA4U', 'Economics', 'Grade 12', 'University', 'Grade 12', 57400, 122400, false),
('CPW4U', 'Canadian & World Politics', 'Grade 12', 'University', 'Grade 12', 57400, 122400, false),
-- Grade 11
('MCR3U', 'Functions', 'Grade 11', 'University', 'Grade 11', 57400, 122400, false),
('SPH3U', 'Physics', 'Grade 11', 'University', 'Grade 11', 57400, 122400, false),
('SCH3U', 'Chemistry', 'Grade 11', 'University', 'Grade 11', 57400, 122400, false),
('SBI3U', 'Biology', 'Grade 11', 'University', 'Grade 11', 57400, 122400, false),
('ENG3U', 'English', 'Grade 11', 'University', 'Grade 11', 57400, 122400, false),
('BAF3M', 'Financial Accounting', 'Grade 11', 'University/College', 'Grade 11', 57400, 122400, false),
('ICS3U', 'Introduction to Computer Science', 'Grade 11', 'University', 'Grade 11', 57400, 122400, false),
-- Grade 10
('MPM2D', 'Principles of Mathematics', 'Grade 10', 'De-streamed', 'Grade 10', 57400, 122400, false),
('SNC2D', 'Science', 'Grade 10', 'De-streamed', 'Grade 10', 57400, 122400, false),
('ENG2D', 'English', 'Grade 10', 'De-streamed', 'Grade 10', 57400, 122400, false),
('CHV2O', 'Civics', 'Grade 10', 'Open', 'Grade 10', 57400, 122400, false),
-- Grade 9
('MTH1W', 'Mathematics', 'Grade 9', 'De-streamed', 'Grade 9', 57400, 122400, false),
('SNC1W', 'Science', 'Grade 9', 'De-streamed', 'Grade 9', 57400, 122400, false),
('ENG1W', 'English', 'Grade 9', 'De-streamed', 'Grade 9', 57400, 122400, false),
-- ESL
('ESLAO', 'ESL Level 1', 'ESL', 'Open', 'ESL', 57400, 122400, false),
('ESLBO', 'ESL Level 2', 'ESL', 'Open', 'ESL', 57400, 122400, false),
('ESLCO', 'ESL Level 3', 'ESL', 'Open', 'ESL', 57400, 122400, false),
('ESLDO', 'ESL Level 4', 'ESL', 'Open', 'ESL', 57400, 122400, false),
('ESLEO', 'ESL Level 5', 'ESL', 'Open', 'ESL', 57400, 122400, false),
-- Free
('GLC2O', 'Career Studies', 'Grade 10', 'Open', 'Free', 0, 0, true),
('GLS1O', 'Learning Strategies', 'Grade 9', 'Open', 'Free', 0, 0, true),
-- Languages
('FSF1O', 'Core French', 'Grade 9', 'Open', 'Languages', 57400, 122400, false),
('LKBDU', 'Mandarin', 'Grade 12', 'University', 'Languages', 57400, 122400, false)
ON CONFLICT (code) DO NOTHING;
