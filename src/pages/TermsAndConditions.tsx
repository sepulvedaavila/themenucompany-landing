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

const TermsAndConditions = () => {
  return (
    <LegalLayout title="Términos y Condiciones" lastUpdated="20 de abril de 2026">
      <p>
        Gracias por visitar{" "}
        <a
          href="https://www.themenucompany.mx"
          className="text-primary underline"
        >
          www.themenucompany.mx
        </a>
        . Los presentes Términos y Condiciones (en adelante, los “T&C”) regulan
        el acceso y uso del sitio web, así como los servicios ofrecidos por The
        Menu Company (en adelante, “The Menu Company” o “el Responsable”),
        incluyendo todas sus secciones, canales de comunicación, plataformas
        digitales y materiales o documentos puestos a disposición del usuario
        (en adelante, la “Plataforma”).
      </p>
      <p>
        Al registrarte, contratar o continuar utilizando nuestros servicios, el
        usuario (en adelante, el “Usuario” o “Titular”) acepta y se obliga a
        los presentes T&C en su totalidad. Asimismo, otorga su consentimiento
        para la recopilación y uso de sus datos personales según lo establecido
        en el Aviso de Privacidad disponible en la Plataforma.
      </p>
      <p>
        El uso de esta Plataforma no está autorizado a menores de edad. Los
        actos que éstos realicen en la Plataforma serán responsabilidad de sus
        tutores o representantes legales.
      </p>
      <p>
        Estos T&C constituyen un acuerdo legal vinculante entre el Usuario y
        The Menu Company. En caso de no estar de acuerdo con alguna de sus
        disposiciones, el Usuario deberá abstenerse de utilizar la Plataforma y
        notificarlo por escrito a{" "}
        <a
          href="mailto:contacto@themenucompany.mx"
          className="text-primary underline"
        >
          contacto@themenucompany.mx
        </a>
        .
      </p>

      <Section title="1. Descripción del servicio">
        <p>
          The Menu Company ofrece un servicio de suscripción de planeación de
          menús semanales personalizados. Cada semana, el Responsable entrega a
          la Titular un menú familiar semanal diseñado con base en sus
          preferencias y las de su hogar, acompañado de la lista del súper
          organizada por categoría y las instrucciones de preparación
          correspondientes.
        </p>
        <p>
          El servicio se presta de forma íntegramente digital. The Menu Company
          no realiza envíos físicos de alimentos, insumos ni productos de
          ningún tipo.
        </p>
      </Section>

      <Section title="2. Registro y cuenta">
        <p>
          Para contratar el servicio, el Usuario debe ser mayor de edad y
          proporcionar información veraz, completa y actualizada durante el
          proceso de registro. The Menu Company se reserva el derecho de
          verificar la información proporcionada y de suspender o cancelar
          cuentas que contengan datos falsos o inconsistentes.
        </p>
        <p>
          El Usuario es responsable de mantener la confidencialidad de sus
          credenciales de acceso y de toda actividad realizada desde su cuenta.
          Ante cualquier acceso no autorizado, deberá notificarlo de inmediato
          a{" "}
          <a
            href="mailto:contacto@themenucompany.mx"
            className="text-primary underline"
          >
            contacto@themenucompany.mx
          </a>
          .
        </p>
        <p>
          The Menu Company se reserva el derecho de negar, suspender o cancelar
          unilateralmente el acceso y uso de la Plataforma a cualquier Usuario
          que incumpla los presentes T&C, sin responsabilidad alguna.
        </p>
      </Section>

      <Section title="3. Membresías y precios">
        <p>
          The Menu Company ofrece distintos planes de suscripción cuyos precios
          y condiciones vigentes se encuentran publicados en{" "}
          <a
            href="https://www.themenucompany.mx"
            className="text-primary underline"
          >
            www.themenucompany.mx
          </a>
          . El Responsable se reserva el derecho de modificar los planes
          disponibles, sus precios y condiciones en cualquier momento,
          publicando los cambios en el sitio web con previo aviso a los
          Usuarios activos.
        </p>
        <p>
          Los precios incluyen los impuestos aplicables conforme a la
          legislación mexicana vigente y pueden ser actualizados con previo
          aviso a los Usuarios activos. La membresía se renueva automáticamente
          al final de cada ciclo de facturación, salvo que el Usuario solicite
          su cancelación con anterioridad conforme a lo establecido en la
          Sección 5 de los presentes T&C.
        </p>
      </Section>

      <Section title="4. Pagos y facturación">
        <Subsection title="4.1 Medios de pago">
          <p>
            Los pagos por el servicio se procesan a través de Stripe,
            plataforma de pagos en línea certificada bajo el estándar PCI DSS
            (Payment Card Industry Data Security Standard). El Usuario podrá
            realizar su pago con tarjeta de crédito o débito directamente en el
            sitio web de The Menu Company. Los datos de tarjeta son gestionados
            de forma segura por Stripe; The Menu Company no almacena
            información de tarjetas en sus propios sistemas.
          </p>
          <p>
            Para suscripciones, el cargo se realizará de forma automática y
            recurrente al método de pago registrado al inicio de la
            contratación, salvo cancelación previa conforme a lo establecido en
            la Sección 5 de los presentes Términos.
          </p>
        </Subsection>

        <Subsection title="4.2 Facturación">
          <p>
            Para solicitar comprobante fiscal digital (CFDI), el Usuario deberá
            enviar sus datos fiscales completos (nombre o razón social, RFC y
            dirección fiscal) a{" "}
            <a
              href="mailto:contacto@themenucompany.mx"
              className="text-primary underline"
            >
              contacto@themenucompany.mx
            </a>{" "}
            dentro del mes natural en que se realizó el pago. No se emitirán
            facturas por periodos anteriores al mes en curso.
          </p>
        </Subsection>

        <Subsection title="4.3 Cargos y renovación">
          <p>
            The Menu Company no se hace responsable por cargos no reconocidos
            derivados de información de pago incorrecta proporcionada por el
            Usuario. En caso de fallo en el procesamiento de un pago, el
            servicio podrá ser suspendido hasta que el pago sea confirmado.
          </p>
        </Subsection>
      </Section>

      <Section title="5. Cancelación y reembolsos">
        <p>
          El Usuario podrá cancelar su suscripción en cualquier momento
          comunicándolo por escrito a{" "}
          <a
            href="mailto:contacto@themenucompany.mx"
            className="text-primary underline"
          >
            contacto@themenucompany.mx
          </a>
          . La cancelación surtirá efecto al término del ciclo de facturación
          en curso; el servicio continuará activo hasta esa fecha.
        </p>
        <p>
          No se realizarán reembolsos por periodos parcialmente utilizados,
          salvo en los supuestos expresamente previstos por la Ley Federal de
          Protección al Consumidor o cuando el incumplimiento sea atribuible a
          The Menu Company.
        </p>
        <p>
          The Menu Company se reserva el derecho de cancelar una suscripción
          por incumplimiento de los presentes T&C, en cuyo caso no procederá
          reembolso alguno por el tiempo no utilizado del ciclo en curso.
        </p>
      </Section>

      <Section title="6. Uso permitido de la plataforma">
        <p>
          El Usuario únicamente está autorizado a utilizar la Plataforma y su
          contenido (menús, recetas, listas de compras, instrucciones de
          preparación) para fines personales y familiares no comerciales.
        </p>
        <p>Queda expresamente prohibido:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Reproducir, distribuir, comercializar o transmitir por cualquier
            medio el contenido de la Plataforma y/o los materiales generados a
            partir de la misma, sin autorización previa y por escrito de The
            Menu Company.
          </li>
          <li>
            Copiar, descargar, traducir o almacenar el contenido de la
            Plataforma y/o los materiales generados a partir de la misma, para
            fines distintos al uso personal autorizado.
          </li>
          <li>
            Utilizar la Plataforma con fines ilícitos o que contravengan los
            presentes T&C.
          </li>
          <li>
            Intentar acceder a secciones restringidas de la Plataforma o
            interferir con su funcionamiento.
          </li>
        </ul>
        <p>
          Toda utilización no autorizada de la Plataforma podrá dar lugar a
          sanciones civiles y/o penales. The Menu Company se reserva el derecho
          de ejercer las acciones legales correspondientes y de exigir
          indemnización por los daños y perjuicios ocasionados.
        </p>
        <p>
          Durante el uso de la Plataforma, y salvo que el Usuario manifieste lo
          contrario conforme al procedimiento descrito en el Aviso de
          Privacidad, el Usuario acepta recibir comunicaciones del servicio por
          correo electrónico.
        </p>
      </Section>

      <Section title="7. Deslinde de responsabilidad nutricional y de salud">
        <p>
          El servicio de The Menu Company consiste exclusivamente en la
          organización, calendarización y presentación de recetas conforme a
          las preferencias del hogar.
        </p>
        <p>
          The Menu Company no asume ninguna responsabilidad respecto a los
          efectos nutricionales, calóricos, alérgenos, interacciones con
          condiciones médicas o cualquier consecuencia para la salud derivada
          del consumo de los alimentos preparados con base en los menús
          proporcionados. La evaluación de la idoneidad de cualquier receta o
          alimento para los integrantes del hogar es responsabilidad exclusiva
          del Usuario o de los profesionales de salud que éste consulte,
          independientemente de la información que haya sido proporcionada a
          The Menu Company durante el proceso de incorporación al servicio o en
          cualquier momento posterior.
        </p>
        <p>
          El servicio de planeación de menús de The Menu Company no constituye,
          ni debe interpretarse como, asesoría médica, nutricional, dietética o
          de salud de ningún tipo. The Menu Company no es un servicio de salud
          ni emplea profesionales del área médica o nutricional en el contexto
          de sus servicios. Para necesidades médicas, nutricionales o
          dietéticas específicas, el Usuario deberá consultar a profesionales
          de la salud debidamente certificados. The Menu Company no garantiza
          ningún resultado de salud, nutrición o bienestar derivado del uso del
          servicio.
        </p>
      </Section>

      <Section title="8. Propiedad intelectual">
        <p>
          Todo el contenido disponible en la Plataforma —incluyendo, sin
          limitación, la marca, logotipos, textos, diseños y estructura de los
          menús— es propiedad de The Menu Company y se encuentra protegido por
          las leyes mexicanas e internacionales en materia de propiedad
          intelectual y derechos de autor. Los derechos de las recetas
          pertenecen a sus respectivos titulares.
        </p>
        <p>
          El Usuario debe asumir que todo el contenido de la Plataforma está
          protegido por derechos de autor, salvo indicación expresa en
          contrario. Su uso sin autorización por escrito de The Menu Company
          está estrictamente prohibido y podrá dar lugar a las acciones legales
          correspondientes.
        </p>
        <p>
          Respecto a recetas de terceros (contenido público atribuido a sus
          creadores originales), The Menu Company se compromete a incluir la
          atribución correspondiente mediante enlace o código QR al contenido
          original. La inclusión de dichas recetas no implica reclamación de
          autoría sobre las mismas.
        </p>
      </Section>

      <Section title="9. Limitación de responsabilidad">
        <p>
          The Menu Company no garantiza que la Plataforma esté libre de
          errores, virus o interrupciones, ni que su funcionamiento sea
          ininterrumpido. The Menu Company no garantiza ningún resultado
          específico derivado del uso del servicio.
        </p>
        <p>The Menu Company no será responsable por:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Daños indirectos, incidentales, especiales o consecuenciales
            derivados del uso o imposibilidad de uso del servicio.
          </li>
          <li>
            Fallas, errores o interrupciones imputables a proveedores externos
            de tecnología o telecomunicaciones.
          </li>
          <li>
            Interrupciones del servicio derivadas de causas de fuerza mayor o
            caso fortuito.
          </li>
          <li>
            Consecuencias derivadas del uso incorrecto o no autorizado de la
            cuenta por parte del Usuario o de terceros.
          </li>
        </ul>
        <p>
          The Menu Company se reserva el derecho de modificar, suspender o
          descontinuar cualquier aspecto de la Plataforma en cualquier momento,
          con o sin previo aviso, sin que ello genere responsabilidad alguna
          frente al Usuario.
        </p>
      </Section>

      <Section title="10. Modificaciones a los t&c">
        <p>
          The Menu Company se reserva el derecho de actualizar los presentes
          T&C en cualquier momento. Las modificaciones serán publicadas en la
          Plataforma e indicarán la fecha de entrada en vigor. El uso
          continuado del servicio por parte del Usuario después de la
          publicación de las modificaciones constituirá su aceptación.
        </p>
        <p>
          En caso de modificaciones sustanciales que afecten los derechos del
          Usuario, The Menu Company enviará una notificación directa al correo
          electrónico registrado con un mínimo de quince (15) días de
          anticipación a su entrada en vigor.
        </p>
      </Section>

      <Section title="11. Legislación y jurisdicción">
        <p>
          Los presentes T&C se rigen e interpretan de conformidad con las leyes
          de los Estados Unidos Mexicanos y los tratados internacionales
          celebrados y ratificados por México en las materias aplicables.
        </p>
        <p>
          Cualquier controversia entre el Usuario y The Menu Company
          relacionada con el uso de la Plataforma o los servicios prestados
          será sometida a la jurisdicción de los tribunales competentes de
          Monterrey, Nuevo León, México, renunciando las partes expresamente a
          cualquier otro fuero que pudiera corresponderles en razón de sus
          domicilios presentes o futuros.
        </p>
        <p>
          El Usuario declara expresamente aceptar el uso de medios electrónicos
          como medio de comunicación y contratación, en los términos del
          artículo 1803 del Código Civil Federal.
        </p>
      </Section>

      <Section title="12. Contacto">
        <p>
          Para dudas, aclaraciones o notificaciones relacionadas con los
          presentes T&C, el Usuario puede comunicarse con The Menu Company a
          través de:
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
            <strong>Sitio web:</strong>{" "}
            <a
              href="https://www.themenucompany.mx"
              className="text-primary underline"
            >
              www.themenucompany.mx
            </a>
          </li>
        </ul>
      </Section>

      <p className="font-arsenal italic text-base text-carbon mt-10 border-l-4 border-sage pl-4">
        Al utilizar la Plataforma o contratar los servicios de The Menu
        Company, el Usuario manifiesta haber leído, comprendido y aceptado
        íntegramente los presentes Términos y Condiciones.
      </p>
    </LegalLayout>
  );
};

export default TermsAndConditions;
