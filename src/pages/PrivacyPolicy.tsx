import LegalLayout from "@/components/LegalLayout";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="font-arsenal font-bold text-xl text-primary mt-8 mb-3 uppercase">{title}</h2>
    <div className="space-y-3 text-base">{children}</div>
  </section>
);

const Subsection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-4">
    <h3 className="font-arsenal font-bold text-base text-primary mb-2">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Aviso de Privacidad" lastUpdated="20 de abril de 2026">
      <p>
        The Menu Company mantiene un interés constante en salvaguardar la
        integridad, privacidad y protección de datos personales de los
        Titulares del sitio web{" "}
        <a
          href="https://www.themenucompany.mx"
          className="text-primary underline"
        >
          www.themenucompany.mx
        </a>{" "}
        (“El Sitio”). Para efectos del presente Aviso de Privacidad, el término
        “Titulares” se refiere a todos aquellos individuos que acceden y hacen
        uso del Sitio y/o de los Servicios de The Menu Company por cualquier
        medio.
      </p>
      <p>
        El presente Aviso de Privacidad se emite de conformidad con la Ley
        Federal de Protección de Datos Personales en Posesión de Particulares
        (“la Ley”), publicada en el Diario Oficial de la Federación el 5 de
        julio de 2010; su Reglamento, publicado el 21 de diciembre de 2011; y
        los Lineamientos del Aviso de Privacidad publicados el 17 de enero de
        2013.
      </p>

      <Section title="1. Identidad y domicilio del responsable">
        <p>
          The Menu Company es responsable del tratamiento de los datos
          personales que se recaben a través del Sitio y de sus canales de
          servicio.
        </p>
        <ul className="list-none space-y-1">
          <li>
            <strong>Nombre comercial:</strong> The Menu Company
          </li>
          <li>
            <strong>Correo electrónico:</strong>{" "}
            <a
              href="mailto:contacto@themenucompany.mx"
              className="text-primary underline"
            >
              contacto@themenucompany.mx
            </a>
          </li>
          <li>
            <strong>Sitio web:</strong>{" "}
            <a
              href="https://www.themenucompany.mx"
              className="text-primary underline"
            >
              www.themenucompany.mx
            </a>
          </li>
        </ul>
        <p className="italic text-sm text-gray-medium">
          Nota: The Menu Company se encuentra en proceso de constitución como
          persona moral. Una vez formalizada dicha constitución, el presente
          Aviso será actualizado para reflejar la razón social correspondiente,
          sin que ello modifique las condiciones de tratamiento aquí descritas.
        </p>
      </Section>

      <Section title="2. Datos personales que se recaban">
        <Subsection title="2.1 Datos de la titular de la cuenta">
          <p>
            Durante el proceso de registro e incorporación al servicio
            (onboarding), el Responsable recaba los siguientes datos personales
            atribuibles a la persona física titular de la cuenta:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
          </ul>
        </Subsection>

        <Subsection title="2.2 Información del hogar">
          <p>
            Adicionalmente, durante el onboarding se recaba información
            relativa al hogar, incluyendo número de integrantes, preferencias
            alimentarias, restricciones dietéticas y alergias. Esta información
            describe características del hogar como unidad y no es atribuible a
            una persona física identificada o identificable, por lo que no
            constituye dato personal en términos de la Ley.
          </p>
        </Subsection>

        <Subsection title="2.3 Datos de pago y facturación">
          <p>
            En el momento en que el Titular decide contratar o renovar el
            servicio, y de manera separada al proceso de onboarding, el
            Responsable recaba la información necesaria para procesar el pago
            y, en su caso, emitir comprobantes fiscales. Esta información puede
            incluir:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo del titular del método de pago</li>
            <li>
              Datos de la tarjeta de crédito o débito (número, fecha de
              vencimiento y código de seguridad)
            </li>
            <li>Dirección de facturación</li>
            <li>
              Registro Federal de Contribuyentes (RFC), cuando se solicite
              factura fiscal
            </li>
            <li>Correo electrónico para envío de comprobantes</li>
          </ul>
          <p>
            Los datos de tarjeta de pago son procesados de forma segura a
            través de Stripe, Inc., plataforma certificada bajo el estándar PCI
            DSS (Payment Card Industry Data Security Standard). The Menu
            Company no almacena los datos completos de tarjetas en sus propios
            sistemas.
          </p>
          <p>
            El Responsable no recaba datos personales sensibles en los términos
            del artículo 3, fracción VI de la Ley.
          </p>
        </Subsection>
      </Section>

      <Section title="3. Finalidades del tratamiento">
        <Subsection title="3.1 Finalidades primarias (necesarias para la prestación del servicio)">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Crear y administrar la cuenta de la Titular en la plataforma de
              The Menu Company.
            </li>
            <li>
              Prestar el servicio de planeación personalizada de menús
              semanales.
            </li>
            <li>
              Enviar los entregables semanales del servicio: menú semanal,
              lista de compras y recetario.
            </li>
            <li>
              Gestionar la relación contractual de suscripción, incluyendo
              confirmaciones, avisos de renovación y notificaciones de pago.
            </li>
            <li>
              Procesar pagos, emitir recibos y, cuando se solicite,
              comprobantes fiscales digitales (CFDI).
            </li>
            <li>
              Identificar a los Titulares y legitimar sus operaciones dentro
              del servicio.
            </li>
            <li>Atender solicitudes, dudas y requerimientos de soporte.</li>
          </ul>
        </Subsection>

        <Subsection title="3.2 Finalidades secundarias (no necesarias para el servicio)">
          <p>
            Con el consentimiento expreso de la Titular, el Responsable podrá
            utilizar sus datos para:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Enviar comunicaciones de marketing, promociones y contenido
              editorial relacionado con el servicio.
            </li>
            <li>
              Realizar encuestas de satisfacción y estudios de mejora del
              servicio.
            </li>
          </ul>
          <p>
            Si la Titular no desea que sus datos se utilicen para las
            finalidades secundarias, podrá manifestarlo en cualquier momento
            enviando un correo a{" "}
            <a
              href="mailto:contacto@themenucompany.mx"
              className="text-primary underline"
            >
              contacto@themenucompany.mx
            </a>{" "}
            con el asunto “Opt-out comunicaciones”. La negativa no será motivo
            para limitar el acceso al servicio.
          </p>
        </Subsection>
      </Section>

      <Section title="4. Almacenamiento de datos y cierre de cuenta">
        <Subsection title="4.1 Almacenamiento durante la vigencia del servicio">
          <p>
            Los datos personales de los Titulares serán almacenados en los
            sistemas digitales del Responsable y en las plataformas
            tecnológicas de sus proveedores de servicio (encargados del
            tratamiento), durante el periodo necesario para la prestación del
            servicio y el cumplimiento de las obligaciones contractuales y
            fiscales aplicables.
          </p>
        </Subsection>

        <Subsection title="4.2 Cierre de cuenta">
          <p>
            Al cerrarse una cuenta, ya sea por decisión de la Titular o del
            Responsable, los datos personales se manejarán de la siguiente
            manera:
          </p>
          <p>
            <strong>Datos de contacto y preferencias del hogar:</strong> Serán
            conservados por un periodo de dos (2) años a partir de la fecha de
            cierre, con el único propósito de atender posibles reclamaciones o
            solicitudes relacionadas con el servicio prestado. Transcurrido
            dicho plazo, serán eliminados de forma definitiva.
          </p>
          <p>
            <strong>Datos de pago y facturación:</strong> Serán conservados
            durante el periodo que establezca la legislación fiscal y contable
            vigente en México, que actualmente es de diez (10) años conforme
            al Código Fiscal de la Federación. Una vez transcurrido ese plazo,
            serán eliminados o disociados.
          </p>
        </Subsection>
      </Section>

      <Section title="5. Transferencia de datos personales">
        <p>
          The Menu Company no comparte, vende ni cede datos personales a
          terceros con fines comerciales propios de dichos terceros.
        </p>
        <p>
          Los datos personales podrán ser compartidos exclusivamente con los
          siguientes terceros, quienes actúan como encargados del tratamiento
          bajo obligaciones contractuales de confidencialidad:
        </p>
        <p>
          <strong>Stripe, Inc.:</strong> Plataforma de procesamiento de pagos
          con certificación PCI DSS. Recibe los datos de pago del Titular para
          autorizar transacciones de forma segura. Su política de privacidad
          está disponible en{" "}
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            stripe.com/privacy
          </a>
          .
        </p>
        <p>
          <strong>Proveedores de servicios tecnológicos:</strong> Plataformas
          de envío de correo electrónico, herramientas de automatización y
          almacenamiento en la nube utilizados para la prestación del servicio,
          bajo acuerdos de confidencialidad.
        </p>
        <p>
          <strong>Autoridades competentes:</strong> Cuando así lo exija la
          legislación aplicable, una resolución judicial o administrativa. Esta
          transferencia no requiere el consentimiento del Titular conforme al
          artículo 37 de la Ley.
        </p>
        <p>
          En ningún caso se realizarán transferencias que requieran
          consentimiento sin haberlo solicitado previamente a la Titular.
        </p>
      </Section>

      <Section title="6. Derechos ARCO y mecanismo de ejercicio">
        <p>
          La Titular tiene derecho a Acceder, Rectificar, Cancelar u Oponerse
          (derechos ARCO) al tratamiento de sus datos personales, así como a
          revocar en cualquier momento el consentimiento otorgado, sin efectos
          retroactivos.
        </p>
        <p>
          Para ejercer cualquiera de estos derechos, deberá enviar su solicitud
          a:
        </p>
        <ul className="list-none space-y-1">
          <li>
            <strong>Correo electrónico:</strong>{" "}
            <a
              href="mailto:contacto@themenucompany.mx"
              className="text-primary underline"
            >
              contacto@themenucompany.mx
            </a>
          </li>
          <li>
            <strong>Asunto:</strong> “Ejercicio de Derechos ARCO”
          </li>
        </ul>
        <p>La solicitud deberá contener:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nombre completo de la titular.</li>
          <li>Correo electrónico registrado en la cuenta.</li>
          <li>
            Descripción clara del derecho que desea ejercer y los datos sobre
            los que recae la solicitud.
          </li>
          <li>
            Documento que acredite la personería del representante, en caso de
            representación.
          </li>
        </ul>
        <p>
          El Responsable responderá en un plazo máximo de veinte (20) días
          hábiles. Si la solicitud es procedente, los cambios se harán
          efectivos dentro de los quince (15) días hábiles siguientes. En caso
          de que la solicitud sea omisa en señalar dirección de correo
          electrónico, la respuesta quedará disponible en el domicilio del
          Responsable por un periodo de quince (15) días hábiles adicionales.
        </p>
      </Section>

      <Section title="7. Uso de cookies y tecnologías de rastreo">
        <p>
          “Cookies” son pequeños archivos de texto descargados y almacenados en
          el dispositivo del Titular al navegar en el Sitio. Permiten al
          Responsable detectar y recordar ciertos datos de navegación para
          mejorar la experiencia del usuario y el funcionamiento del Sitio.
        </p>
        <p>Los tipos de cookies que pueden utilizarse son:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Cookies técnicas o estrictamente necesarias:</strong>{" "}
            indispensables para el funcionamiento del Sitio.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> recopilan información agregada
            y anónima sobre el uso del Sitio (p. ej., páginas visitadas, tiempo
            de sesión).
          </li>
          <li>
            <strong>Cookies de preferencias:</strong> permiten recordar
            configuraciones seleccionadas por el Titular.
          </li>
        </ul>
        <p>
          La mayoría de los navegadores permiten controlar o deshabilitar las
          cookies a través de sus configuraciones. La desactivación de cookies
          técnicas puede afectar el funcionamiento del Sitio.
        </p>
      </Section>

      <Section title="8. Modificaciones al aviso de privacidad">
        <p>
          The Menu Company se reserva el derecho de actualizar o modificar el
          presente Aviso, sea total o parcialmente, en cualquier momento para
          reflejar cambios en sus prácticas de tratamiento de datos, en la
          legislación aplicable o en la estructura corporativa del Responsable.
        </p>
        <p>
          El Titular podrá tener acceso a dichas modificaciones a través del
          sitio web{" "}
          <a
            href="https://www.themenucompany.mx"
            className="text-primary underline"
          >
            www.themenucompany.mx
          </a>{" "}
          en el enlace de “Aviso de Privacidad”. En caso de cambios
          sustanciales que afecten los derechos de los Titulares, se enviará
          una notificación directa al correo electrónico registrado.
        </p>
      </Section>

      <p className="font-arsenal italic text-base text-carbon mt-10 border-l-4 border-sage pl-4">
        Al proporcionar sus datos personales a través de nuestros formularios o
        al utilizar nuestros servicios, la Titular manifiesta haber leído y
        aceptado los términos del presente Aviso de Privacidad.
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
