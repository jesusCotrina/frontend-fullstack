import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Cool Whole Mouse</title>
        <meta property="og:title" content="Cool Whole Mouse" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">
              #caracteristicas
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103 thq-body-large">Inicio</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104 thq-link thq-body-small">
              #inicio
            </span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105 thq-body-large">Contacto</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106 thq-body-large">Características</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107 thq-link thq-body-small">
              #contacto
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110 thq-link thq-body-small">
              #planes
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111 thq-body-large">Planes</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114 thq-body-small">
              Ver demostración
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115 thq-body-small">
              Crear mi primera lista
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116 thq-heading-1">
              Crea tus listas de tareas con estilo
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117 thq-body-large">
              Organiza tus actividades diarias de forma sencilla y elegante con
              nuestra plataforma en línea para crear to do lists. Destaca por su
              diseño minimalista y estilizado, junto a una paleta de colores
              única que te inspirará a ser más productivo.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118 thq-body-small">
              Organize tasks efficiently
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Efficient Task Management
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120 thq-body-small">
              Customize lists with different colors
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121 thq-heading-2">
              Minimalist Design
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Create stylish to do lists
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123 thq-heading-2">
              Color Customization
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124 thq-heading-2">
              ¡Organiza tu día de manera eficiente!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Crea tus listas de tareas de forma sencilla y visual
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Comienza ahora</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127 thq-body-small">
              Acceso desde cualquier dispositivo para gestionar tus tareas en
              cualquier momento.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128 thq-body-small">
              Interfaz sencilla y elegante para una experiencia de usuario
              intuitiva.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">Personalización</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130 thq-heading-2">
              Diseño Minimalista
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Posibilidad de personalizar listas con diferentes colores y
              estilos.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132 thq-heading-2">Accesibilidad</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133 thq-heading-3">$15/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134 thq-body-small">Try for free</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136 thq-body-small">Get started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Customizable themes
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143 thq-body-small">
              Priority support
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146 thq-body-large">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148 thq-body-small">Upgrade now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149 thq-body-small">
              All Plan 2 features
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150 thq-body-small">
              Collaboration tools
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155 thq-body-small">
              Advanced analytics
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157 thq-body-small">
              All Plan 1 features
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166 thq-heading-3">$10/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172 thq-body-large">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176 thq-body-small">Email support</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177 thq-body-large">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178 thq-body-small">Unlimited tasks</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179 thq-body-small">API access</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184 thq-heading-3">$5/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186 thq-body-small">
              Regístrate en la plataforma con tu dirección de correo
              electrónico.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187 thq-body-small">
              Escribe las tareas que deseas incluir en tu lista y presiona Enter
              para añadirlas.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">
              Crear una nueva lista
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189 thq-body-small">
              Haz clic en el botón &apos;Crear lista&apos; y asigna un nombre a
              tu nueva lista de tareas.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190 thq-heading-2">Crear una cuenta</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191 thq-heading-2">Agregar tareas</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Marca las tareas completadas, elimina las que ya no son necesarias
              y organiza tu lista a tu gusto.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193 thq-heading-2">Gestionar tareas</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Estudiante universitario
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195 thq-body-small">
              Diseñadora gráfica
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196 thq-body-large">María López</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197 thq-body-large">Ana García</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198 thq-body-small">
              La mejor aplicación que he encontrado para gestionar mis proyectos
              y plazos de entrega. ¡Altamente recomendada!
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199 thq-body-large">Juan Pérez</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200 thq-body-small">Freelancer</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Carlos Martínez</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202 thq-body-small">
              ¡Me encanta usar esta plataforma para organizar mis tareas
              diarias! Su diseño minimalista y colores estilizados hacen que sea
              muy agradable de usar.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203 thq-body-small">Empresaria</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204 thq-body-small">
              Excelente herramienta para mantenerme enfocado en mis estudios y
              actividades extracurriculares.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205 thq-heading-2">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206 thq-body-small">
              Me ha ayudado a aumentar mi productividad y a no olvidar ninguna
              tarea importante. ¡Un imprescindible en mi día a día!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207 thq-body-small">
              La simplicidad y elegancia de esta plataforma la hacen única en su
              clase. Nunca había disfrutado tanto organizando mis pendientes.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">¡Contáctanos!</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209 thq-body-large">
              Estamos disponibles las 24 horas del día, los 7 días de la semana
              para responder tus consultas.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210 thq-heading-2">
              ¿Tienes alguna pregunta o sugerencia?
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211 thq-body-large">
              Puedes encontrarnos en nuestras oficinas centrales o contactarnos
              a través de nuestras redes sociales.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212 thq-heading-3">
              contacto@minimalistatodolist.com
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213 thq-heading-3">
              Calle Principal, Ciudad Principal
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214 thq-body-small">Link 5</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215 thq-body-small">Contacto</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216 thq-body-small">Inicio</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217 thq-body-small">
              Términos y condiciones
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218 thq-body-small">
              Acerca de nosotros
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219 thq-body-small">Link 4</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">
              Política de cookies
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">
              Política de privacidad
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
