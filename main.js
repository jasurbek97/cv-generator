const PDFDocument = require('pdfkit');
const fs = require('fs');
const head_font = 'fonts/IBMPlexMono-Medium.ttf';
const sec_font = 'fonts/IBMPlexMono-SemiBold.ttf';
const title_font = 'fonts/IBMPlexMono-Regular.ttf';
const p_font = 'fonts/Roboto-Light.ttf';
const profession_font = 'fonts/IBMPlexMono-ExtraLight.ttf';
const section_color = [1, 49, 92] //rgb;
const sc = [0, 61, 115]; // sidebar color
const color_text = [0, 0, 0]
const line_color = '#46464e'
const ss = 10;//section space
const ls = 10; //left space
const rls = 2 * ls; //left space
const stc = 'white' //sidebar text color
let mt = 20;
let rmt = mt;
const sh = 20; //section height
const sl = 200; //sidebar length
const page_length = 595;
const options = {width: 180, align: 'justify'}
const summary = 'Almost 4 years of professional experience in development and deployment of various Object oriented and web Enterprise Applications using Node.js/NestJs technologies. ' +
    'Working under a senior software architect, prototyped a Kafka-based message queuing system as a microservice in Node.js. ' +
    'Hands-on experience to SCRUM Agile model, SOLID and Test Driven Development (TDD). ' +
    'Excellent communicational, analytical, business and interpersonal skills. Comfortable working independently and also a good team player. ' +
    'Highly motivated to take independent responsibility as well as has the ability to contribute and be a productive team member.'

const name = 'Jasurbek'
const surname = 'Abdurakhmonov'
const proficiency = `Node.js Developer`
const contacts = [
    {
        title: 'Address',
        value: 'Tashkent, Tashkent Uzbekistan (GMT+5)',
        link: null
    }, {
        title: 'Phone',
        value: '+99899-897-32-90',
        link: 'tel:+99899-897-32-90'
    }, {
        title: 'Email',
        value: 'jasurbek.abdurakhmonov@mail.ru',
        link: 'mailto:jasurbek.abdurakhmonov@mail.ru'
    }, {
        title: 'Github',
        value: 'github.com/jasurbek97',
        link: 'https://github.com/jasurbek97'
    }, {
        title: 'Linkedin',
        value: 'linkedin.com/in/jasurbek97',
        link: 'https://www.linkedin.com/in/jasurbek97',
    }
];
const skills = ['JavaScript', 'TypeScript', 'Node.js', 'NestJs', 'Postgresql', 'MongoDB', 'Redis', 'Docker', 'Git (CI/CD)', 'REST', 'WebSocket', 'RabbitMQ', 'Kafka', 'RPC', 'gRPC', 'Microservice', 'Monolith', 'Event Driven', 'Jest / Joi'];

const languages = ['Uzbek', 'English', 'Russian'];
const works = [
    {
        period: `2021-12 - Present`,
        role: `Senior Node.js Developer`,
        org: `UNICONSOFT LLC,  Tashkent, Uzbekistan`,
        text: `Implemented load-balancing with Docker to allow many Node.js instances to handle thousands of concurrent requests. `+
            `Developed Workflow/Doc-flow System Backend APIs in Monolith architecture using NestJS framework and Postgresql and so on and deployed. `+
            `The app was deployed to the private server in two environments (dev, prod) using GitLab CI/CD and Docker. `+
            `Users can create documents and control their status and sign and send to other organizations for approval in an encrypted format, `+
            `store files and create and control tasks to control the investment of the Government and get periodically analytics in excel format. `+
            `Adding features, fixing bugs and code review and testing to many microservices and systems done by other developers.`
    },
    {
        period: `2021-08 - 2022-02`,
        role: `Node.js Developer`,
        org: `APEX INSURANCE LLC,  Tashkent, Uzbekistan`,
        text: `Develop Rest API service using Node.js environment NestJs framework and ` +
              `RabbitMQ in Microservice architecture for insurance system and integrate with third party services. `+
              `Consumed gRPC API to get utility info from other service. ` +
              `Message telegram bot and UI component for the dashboard were developed for the support team, `+
              `using Node.js, Websocket, Redis, Postgresql, and React.js to answer users' questions and get feedback to improve website usage. `+
              `Developed microservice to communicate with the single insurance e-polis integrator,  validate and generate polis in multiple formats, send to the core system and integrate with local payment systems. `+
              `Stack: Kafka, Postgresql, Node.js and  Rest, gRPC protocols. `+
              `Contributed to the core system components, fixed critical bugs, migrated the services to GitHub to use CI/CD actions and reduce the deployment time.`
    },
    {
        period: `2019-01 - 2021-08`,
        role: `Node.js Developer`,
        org: `USOFT LLC,  Tashkent, Uzbekistan`,
        text: `Design and development of file upload service using MinIO as s3 and Node.js framework. ` +
              `Developed an SMS centre to communicate with the Mobile operators in Node.js, SMPP protocol, RabbitMQ for queueing, and Redis for temporary storage. `+
              `Develop billing microservice for the high-load mobile app backend with over 1 mln users and online 50K per/min in Node.js, MongoDB and so on. `+
              `Designed large scalable databases with replicas in Postgresql for 2-3 million records on daily. `+
              `Experience with git version controlling and CI/CD scenarios. `+
              `Contributed to the part of the high-load mobile app backend developing billing microservice with over 1 mln users online 50K per/min in `+
              `Node.js, MongoDB and so on. Users were charged daily from their mobile number balance. Consequently, the billing process time was reduced by 4 times.`

    }
];

const educations = [
    {
        period: '2017-09 - 2021-06',
        speciality: 'Bachelor of Computer Science: Computer Engineering',
        university: 'TASHKENT UNIVERSITY OF INFORMATION TECHNOLOGIES',
        address: 'Tashkent, Tashkent Uzbekistan'
    },
];

(function () {
    const doc = new PDFDocument({size: 'A4', bufferPages: true});
    doc.rect(0, 0, sl, 1000000).fill(sc);

    doc.font(head_font)
        .fontSize(22).fillColor(stc).text(name, ls, mt, options);
    doc.font(head_font)
        .fontSize(22).fillColor(stc).text(surname, ls, mt += 25, options);

    doc.font(profession_font)
        .fontSize(14).fillColor(stc).text(proficiency, ls, mt += 25, options);

    if (contacts.length) {
// Contact
        doc.rect(0, mt += sh + ss, sl, sh).fill(section_color);
        doc.font(sec_font).fontSize(14).fillColor(stc).text(`Contact`, ls, mt, {
            ...options,
            characterSpacing: 1
        });
        let c = 1;
        let link;
        let value;
        let title;
        for ({title, value, link} of contacts) {
            doc.font(title_font).fontSize(12).fillColor(stc).text(title, ls, (c === 1) ? mt += ss + 18 : mt += 18, options);
            doc.font(p_font).fontSize(10).fillColor(stc).text(value, ls, mt += 18, {...options, link: link});
            c++
        }
    }

    if (skills.length) {
        // Skills
        doc.rect(0, mt += 10 + ss, sl, sh).fill(section_color);
        doc.font(sec_font)
            .fontSize(14).fillColor(stc).text(`Technical Skills`, ls, mt, {
            ...options,
            characterSpacing: 1
        });

        let i = 1;
        for (let skill of skills) {
            doc.font(p_font).fontSize(10).fillColor(stc).text(skill, ls + 15, (i === 1) ? mt += 18 + ss : mt += 18, options)
            doc.circle(ls + 10, mt + 6, 2).fillAndStroke(section_color, stc).stroke();
            i++
        }

    }

    if (languages.length) {
        doc.rect(0, mt += 10 + ss, sl, sh).fill(section_color);
        doc.font(sec_font).fontSize(14).fillColor(stc).text(`Languages`, ls, mt, {...options, characterSpacing: 1});
        let k = 1;
        for (let lang of languages) {
            doc.font(p_font).fontSize(10).fillColor(stc).text(lang, ls + 15, (k === 1) ? mt += 18 + ss : mt += 18, options)
            doc.circle(ls + 10, mt + 6, 2).fillAndStroke(section_color, stc).stroke();
            k++
        }
    }


    let right_width = page_length - sl - 2 * rls
    // summary
    doc.font(p_font).fontSize(10).fillColor(color_text).text(summary, sl + rls, rmt, {width: right_width, align: 'justify'})
    let h = 0;
    const summary_height = doc.heightOfString(summary, {width: right_width})

    if (works.length) {
        //Work history
        doc.rect(sl + rls, rmt += summary_height+10, right_width, 2).fill(line_color)
        doc.font(sec_font).fontSize(15).fillColor(section_color).text(`Work History`, sl + rls, rmt + 6, {
            ...options,
            characterSpacing: 1
        });
        doc.rect(sl + rls, rmt += 30, right_width, 2).fill(line_color)

        for (let {period, role, org, text} of works) {
            doc.font(p_font).fontSize(10).fillColor(color_text).text(period, sl + rls, rmt += 15 + h, {
                width: 80,
                align: 'justify'
            })
            doc.font(head_font).fontSize(10).fillColor(color_text).text(role, 100 + sl + rls, rmt, {
                width: page_length - (sl + rls + 2 * 20),
                align: 'justify'
            })
            doc.font(profession_font).fontSize(10).fillColor(color_text).text(org, 100 + sl + rls, rmt += 15, {
                width: page_length - (sl + rls + 2 * 20),
                align: 'justify'
            })
            let text_width = page_length - 90 - (sl + rls + 2 * 20);

            doc.font(p_font).fontSize(8).fillColor(color_text).text(text, 100 + sl + rls, rmt += 15, {
                width: text_width,
                align: 'justify'
            })
            h = doc.heightOfString(text, {width: text_width})
        }

    }

    if (educations.length) {
        doc.rect(sl + rls, rmt += sh + h, right_width, 2).fill(line_color)
        doc.font(sec_font).fontSize(15).fillColor(section_color).text(`Education`, sl + rls, rmt + 6, {
            ...options,
            characterSpacing: 1
        });
        doc.rect(sl + rls, rmt += 30, right_width, 2).fill(line_color)


        for (let {period, speciality, university, address} of educations) {
            doc.font(p_font).fontSize(10).fillColor(color_text).text(period, sl + rls, rmt += 12, {
                width: 80,
                align: 'justify',
                link: null
            })
            doc.font(head_font).fontSize(8).fillColor(color_text).text(speciality, 100 + sl + rls, rmt, {
                width: page_length - (sl + rls + 2 * 20),
                align: 'justify'
            })
            doc.font(profession_font).fontSize(8).fillColor(color_text).text(university, 100 + sl + rls, rmt += 12, {
                width: page_length - (sl + rls + 2 * 20),
                align: 'justify'
            })

            doc.font(p_font).fontSize(8).fillColor(color_text).text(address, 100 + sl + rls, rmt + 12, {
                width: page_length - (sl + rls + 2 * 20),
                align: 'justify'
            })
        }

    }

    doc.end();
    const buffer = [];
    doc.on('data', buffer.push.bind(buffer));
    doc.on('end', () => {
        const data = Buffer.concat(buffer);
        let path = name+'-'+surname+'-cv.pdf';
        if (fs.existsSync('cv.pdf')) fs.unlinkSync(path)
        fs.writeFileSync(path, data)
    });
    console.log('Done');
})()

