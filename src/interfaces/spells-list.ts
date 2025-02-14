import { Spell } from "./character";

export const spellsLibrary: Record<number, Spell[]> = {
  0: [
    {
      name: "Flecha ácida de Melf",
      level: 2,
      school: "Evocación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "90 pies",
      duration: "Instantáneo",
      description: "Una flecha verde brillante sale disparada hacia un objetivo dentro del alcance y explota en una rociada de ácido. Haz un ataque de conjuro a distancia contra el objetivo. Si tienes éxito, este recibe 4d4 de daño de ácido inmediatamente y 2d4 más al final de su siguiente turno. Si fallas, la flecha salpica al objetivo con ácido, haciéndole la mitad del daño inicial y ningún daño al final de su siguiente turno.",
      damage: "Nivel 2: 4d4, Nivel 3: 5d4, Nivel 4: 6d4, Nivel 5: 7d4, Nivel 6: 8d4, Nivel 7: 9d4, Nivel 8: 10d4, Nivel 9: 11d4"
    },
    {
      name: "Salpicadura ácida",
      level: 0,
      school: "Conjuración",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Lanzas una burbuja de ácido. Elige una criatura dentro del alcance o dos criaturas dentro del alcance separadas 5 pies o menos la una de la otra. Cada objetivo deberá tener éxito en una tirada de salvación de Destreza o sufrirá 1d6 de daño de ácido. El daño del conjuro aumenta en 1d6 cuando alcanzas el nivel 5 (2d6), el nivel 11 (3d6) y el nivel 17 (4d6)."
    },
    {
      name: "Auxilio",
      level: 2,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Paladín"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "8 horas",
      description: "Este conjuro refuerza la resistencia y decisión de tus aliados. Elige hasta tres criaturas dentro del alcance: sus puntos de golpe máximos y actuales aumentan en 5 hasta el final de la duración del conjuro."
    },
    {
      name: "Alarma",
      level: 1,
      school: "Abjuración",
      classes: [
        "Explorador",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "30 pies",
      duration: "8 horas",
      description: "Preparas una alarma contra intrusos. Elige una puerta, una ventana o cualquier otra área dentro del alcance cuyo volumen sea menor o igual que un cubo de 20 pies de lado. Una alarma te avisará siempre que una criatura, Diminuta o de tamaño superior, toque o entre en la zona vigilada antes del final del conjuro. Al lanzarlo puedes elegir que ciertas criaturas no activarán la alarma, que puede ser mental o sonora. Una alarma mental te alerta con un sonido dentro de tu mente si estás a 1 milla de la zona vigilada. Este sonido te despertará si estás durmiendo. Una alarma sonora produce un sonido de campanilla durante 10 segundos audible a 60 pies de distancia."
    },
    {
      name: "Alterar el propio aspecto",
      level: 2,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración, hasta 1 hora",
      description: "Asumes un aspecto distinto. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one. ***Adaptación acuática.*** Adaptas tu cuerpo a un medio acuático. Te crecen branquias y membranas entre los dedos. Puedes respirar bajo el agua y ganas una velocidad nadando igual a tu velocidad caminando. ***Cambiar de aspecto.*** Transformas tu apariencia. Decide tu aspecto, especificando una altura, peso, rasgos faciales, timbre de voz, longitud del cabello, tono de piel y cualquier rasgo distintivo que quieras añadir.\n\nEres capaz de adoptar la apariencia de un miembro de otra raza, pero tu perfil no cambia. Tampoco puedes tomar el aspecto de una criatura de un tamaño que no sea el tuyo, ya que tu forma básica debe mantenerse; si eres bípedo, no puedes usar este conjuro para hacerte cuadrúpedo, por ejemplo. En cualquier momento, hasta el final de la duración del conjuro, puedes usar una acción para cambiar tu aspecto de nuevo mediante esta opción. ***Armas naturales.*** Te crecen garras, colmillos, pinchos, cuernos u otra arma natural de tu elección. Tus ataques sin armas hacen 1d6 de daño contundente, perforante o cortante, de acuerdo al arma natural que escojas. Eres competente con esta arma, que es mágica y te proporciona un bonificador de +1 a las tiradas de ataque y de daño que hagas con ella."
    },
    {
      name: "Encantar animal",
      level: 1,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "24 horas",
      description: "Este conjuro te permite convencer a una bestia de que no quieres hacerle daño. Elige a una bestia que puedas ver dentro del alcance. Debe ser capaz de verte y oírte. Si su inteligencia es 4 o más, el conjuro falla. En caso contrario, el objetivo debe superar una tirada de salvación de Sabiduría o quedará hechizado por ti hasta el final de la duración del conjuro. Si tú o cualquiera de tus compañeros dañáis al objetivo, el conjuro termina."
    },
    {
      name: "Mensajero Animal",
      level: 2,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "24 horas",
      description: "Mediante este conjuro consigues que un animal entregue un mensaje. Elige a una bestia Diminuta como una ardilla, un arrendajo azul o un murciélago. Escoge una localización que debes haber visitado y un destinatario que corresponda a una descripción general, como 'un hombre o una mujer con el uniforme de la guardia de la ciudad' o 'un enano pelirrojo con un sombrero puntiagudo'. Después di al animal un mensaje de hasta veinticinco palabras. La bestia objetivo viaja hasta el final de la duración del conjuro hacia la localización elegida. Los animales son capaces de recorrer hasta 50 millas en 24 horas si pueden volar y 25 millas en caso contrario. Cuando el mensajero llega, entrega tu mensaje a la criatura descrita, reproduciendo el sonido de tu voz. El animal solo hablará a una criatura que encaje con la descripción dada. Si el mensajero no alcanza su destino antes del final de la duración del conjuro, el mensaje se pierde y la bestia vuelve a donde lanzaste el conjuro. A niveles superiores, cuando lanzas este conjuro utilizando un espacio de conjuro de nivel 3 o más, la duración aumenta en 48 horas por cada nivel por encima de 2 que tenga el espacio que hayas empleado."
    },
    {
      name: "Aspectos Animales",
      level: 8,
      school: "Transmutación",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración, hasta 24 horas",
      description: "Tu magia convierte a otros en bestias. Elige a cualquier número de criaturas voluntarias que puedas ver dentro del alcance. Transformas a cada objetivo en una bestia Grande o más pequeña con un valor de desafío igual o inferior a 4. En los siguientes turnos puedes usar una acción para transformar a las criaturas afectadas en bestias distintas. La transformación dura hasta el final de la duración del conjuro o hasta que el objetivo muera o sea reducido a 0 puntos de golpe. Puedes elegir una forma distinta para cada objetivo. Reemplaza el perfil del objetivo por el perfil de la bestia elegida aunque el objetivo mantiene su alineamiento y sus puntuaciones de Inteligencia, Sabiduría y Carisma. El objetivo pasa a tener los puntos de golpe de su nueva forma y cuando revierta a su forma normal, vuelve a poseer los puntos de golpe que tuviera antes de la transformación. La transformación se rompe si la forma de bestia es reducida a 0 puntos de golpe y cualquier daño sobrante se aplica a la forma normal. Si este daño sobrante no reduce la forma normal de la criatura a 0 puntos de vida, esta no cae inconsciente. Las acciones de la criatura quedan limitadas por la naturaleza de su nueva forma y tampoco puede hablar ni lanzar conjuros. El equipamiento del objetivo se funde con la nueva forma de modo que no puede utilizar, blandir o beneficiarse de su equipamiento de ninguna manera."
    },
    {
      name: "Animar a los Muertos",
      level: 3,
      school: "Nigromancia",
      classes: [
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "10 pies",
      duration: "Instantáneo",
      description: "Este conjuro crea un siervo muerto viviente. Elige un montón de huesos o un cadáver de un humanoide de tamaño Mediano o Pequeño dentro de tu alcance. El conjuro insufla en el objetivo una burda semblanza de vida, levantándolo como una criatura muerta viviente. El objetivo se convierte en un esqueleto si eliges un montón de huesos, o en un zombi si eliges un cadáver. El DM tiene el perfil de la criatura. En cada turno, puedes usar una acción adicional para dar una orden mental a cualquier criatura creada mediante este conjuro que esté a 60 pies o menos de ti (si controlas varias criaturas, puedes dirigirlas todas a la vez con la misma orden). Decides qué acción tomará la criatura y dónde se moverá durante su próximo turno. También puedes dar una orden general, como vigilar una cámara o pasillo específico. Si no das ninguna orden, la criatura se limitará a defenderse de criaturas hostiles. Una vez dada una orden, la seguirá hasta completarla. La criatura permanece bajo tu control durante 24 horas, después de lo cual deja de obedecer cualquier orden que le hayas dado. Para mantener el control de la criatura por otras 24 horas, debes lanzar este conjuro sobre ella nuevamente antes de que el período actual de 24 horas termine. Este uso del conjuro reafirma tu control sobre hasta cuatro criaturas que hayas animado previamente con este conjuro, en lugar de animar una nueva."
    },
    {
      name: "Animar Objetos",
      level: 5,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Hasta 1 minuto",
      description: "Tus órdenes hacen que los objetos cobren vida. Elige hasta diez objetos no mágicos dentro del alcance que no lleve o vista nadie. Los objetivos Medianos cuentan como dos objetos, los Grandes como cuatro objetos y los Enormes como ocho objetos. No puedes animar ningún objeto mayor que Enorme. Cada objetivo cobra vida y se convierte en una criatura bajo tu control hasta el final de la duración del conjuro o hasta que sea reducido a 0 puntos de golpe. Como acción adicional, puedes mentalmente comandar cualquier criatura que hayas creado con este conjuro si la criatura está dentro de 500 pies de ti (si controlas múltiples criaturas, puedes comandar cualquiera o todas ellas al mismo tiempo, emitiendo el mismo comando para cada una). Decides qué acción tomará la criatura y dónde se moverá durante su próximo turno, o puedes emitir un comando general, como guardar una cámara o corredor particular. Si no emites comandos, la criatura solo se defiende contra criaturas hostiles. Una vez dado un orden, la criatura continúa siguiéndolo hasta que su tarea esté completa. ##### Estadísticas de Objeto Animado | Tamaño | PG | CA | Ataque | Fue | Des | |---|---|---|---|---|---| | Diminuto | 20 | 18 | +8 al ataque, 1d4 + 4 de daño | 4 | 18 | | Pequeño | 25 | 16 | +6 al ataque, 1d8 + 2 de daño | 6 | 14 | | Mediano | 40 | 13 | +5 al ataque, 2d6 + 1 de daño | 10 | 12 | | Grande | 50 | 10 | +6 al ataque, 2d10 + 2 de daño | 14 | 10 | | Enorme | 80 | 10 | +8 al ataque, 2d12 + 4 de daño | 18 | 6 | Un objeto animado es un constructo con CA, puntos de golpe, ataques, Fuerza y Destreza determinados por su tamaño. Su Constitución es 10 y sus Inteligencia y Sabiduría son 3, y su Carisma es 1. Su velocidad es de 30 pies; si el objeto carece de piernas u otros apéndices que pueda usar para locomoción, en su lugar tiene una velocidad de vuelo de 30 pies y puede flotar. Si el objeto está firmemente sujeto a una superficie o a un objeto más grande, como una cadena atornillada a una pared, su velocidad es 0. Tiene visión ciega con un radio de 30 pies y es ciego más allá de esa distancia. Cuando el objeto animado cae a 0 puntos de golpe, vuelve a su forma original, y cualquier daño restante se lleva a su forma original de objeto. Si mandas a un objeto atacar, puede hacer un solo ataque cuerpo a cuerpo contra una criatura dentro de 5 pies de él. Realiza un ataque de embestida con un bono de ataque y daño contundente determinados por su tamaño. El DM puede decidir que un objeto específico inflija daño cortante o perforante basado en su forma."
    },
    {
      name: "Caparazón Antivida",
      level: 5,
      school: "Abjuración",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Personal",
      duration: "Hasta 1 hora",
      description: "Una barrera rutilante se extiende alrededor de ti en un radio de 10 pies, permanece centrada en ti y se mueve contigo, manteniendo a raya a todas las criaturas que no sean muertos vivientes o autómatas. La barrera persiste hasta el final de la duración del conjuro. Las criaturas afectadas no pueden penetrar en el interior de la barrera ni parcialmente ni por completo. No obstante, son capaces de lanzar conjuros o realizar ataques con armas de gran alcance o a distancia a través de la barrera. Si tu movimiento obliga a una criatura afectada a atravesar la barrera, el conjuro termina."
    },
    {
      name: "Campo Antimagia",
      level: 8,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Personal",
      duration: "Hasta 1 hora",
      description: "Te rodea una esfera invisible de antimagia de 10 pies de radio. Esta área queda aislada de la energía mágica que impregna el multiverso. Dentro de la esfera, no se pueden lanzar conjuros, las criaturas invocadas desaparecen y los objetos mágicos se convierten en mundanos. La esfera se mueve contigo, centrada en ti, hasta el final del conjuro. Los conjuros y otros efectos mágicos, excepto aquellos creados por un artefacto o una deidad, no pueden penetrar en la esfera y quedan suprimidos dentro de ella. Los espacios de conjuro empleados en lanzar conjuros que queden suprimidos se gastan con normalidad. Mientras un conjuro está suprimido, no tiene efecto, pero el tiempo que pasa en este estado se resta de su duración normal. Efectos que eligen un objetivo. Los conjuros y efectos mágicos que eligen como objetivo a una criatura u objeto, como proyectil mágico o hechizar persona, no tienen efecto si su objetivo está dentro de la esfera. Áreas de efecto mágico. El área de otro conjuro o efecto mágico, como una bola de fuego, no se extiende al interior de la esfera. Si la esfera se superpone con el área de un efecto mágico, este queda anulado en la parte del área cubierta por la esfera. Por ejemplo, las llamas creadas por un muro de fuego quedan suprimidas dentro de la esfera, creando un hueco en el muro si la superposición es suficientemente grande. Conjuros. Cualquier conjuro o efecto mágico activo en una criatura u objeto dentro de la esfera queda suprimido mientras la criatura o el objeto permanezca en su interior. Objetos mágicos. Los poderes y propiedades de los objetos mágicos quedan suprimidos dentro de la esfera. Por ejemplo, una espada larga +1 se comporta dentro de la esfera como una espada larga no mágica."
    },
    {
      name: "Antipatía/Simpatía",
      level: 8,
      school: "Encantamiento",
      classes: [
        "Druida",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "60 pies",
      duration: "10 días",
      description: "Este conjuro atrae o repele a criaturas de tu elección. Elige a un objetivo dentro del alcance: un objeto, una criatura de tamaño Enorme o más pequeña, o un área igual o menor que un cubo de 200 pies. Luego especifica un tipo de criatura inteligente, como dragones rojos, goblins o vampiros. Imbuyes al objetivo con un aura que atrae o repele a las criaturas especificadas hasta el final de la duración del conjuro. Puedes elegir causar antipatía o simpatía según lo desees. Antipatía: El encantamiento hace que las criaturas del tipo especificado sientan una intensa necesidad de abandonar el área y evitar al objetivo. Cuando una criatura del tipo especificado ve al objetivo o se acerca a menos de 60 pies, debe superar una tirada de salvación de Sabiduría o quedar asustada. La criatura permanece asustada mientras pueda ver al objetivo o se mantenga dentro de 60 pies de distancia. Mientras está asustada por el objetivo, la criatura debe usar su movimiento para moverse al lugar más cercano desde el que no pueda ver al objetivo. Si la criatura se aleja más de 60 pies del objetivo y ya no puede verlo, ya no estará asustada, pero se asustará de nuevo si vuelve a ver al objetivo o se acerca a menos de 60 pies. Simpatía: El encantamiento hace que las criaturas especificadas sientan una intensa necesidad de acercarse al objetivo mientras estén a 60 pies o menos del mismo o puedan verlo. Cuando una criatura del tipo especificado ve al objetivo o se acerca a menos de 60 pies, debe superar una tirada de salvación de Sabiduría o utilizar su movimiento en cada uno de sus turnos para acercarse al objetivo hasta que pueda entrar en el área o quedar adyacente a él. Una vez que lo hace, no puede alejarse voluntariamente del objetivo. Si el objetivo daña o de alguna forma perjudica a una criatura afectada, esta puede realizar una tirada de salvación de Sabiduría para terminar el efecto, como se describe a continuación. Terminar el Efecto: Si una criatura afectada termina su turno a más de 60 pies del objetivo o no puede verlo, realiza una tirada de salvación de Sabiduría. Si tiene éxito, ya no estará afectada por el objetivo y reconocerá el sentimiento de antipatía o simpatía como mágico. Además, una criatura afectada por el conjuro puede realizar otra tirada de salvación de Sabiduría cada 24 horas mientras persista el efecto del conjuro. Una criatura que supere esta tirada de salvación es inmune al efecto durante 1 minuto, después del cual puede ser afectada de nuevo."
    },
    {
      name: "Ojo Arcano",
      level: 4,
      school: "Adivinación",
      classes: [
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración, hasta 1 hora",
      description: "Creas un ojo mágico invisible capaz de levitar y que permanece hasta el final de la duración del conjuro. Recibes mentalmente información visual del ojo, que posee vista normal y visión en la oscuridad hasta 30 pies. El ojo es capaz de mirar en cualquier dirección. Como acción, puedes mover el ojo hasta 30 pies a una nueva localización. No hay un límite de distancia establecido entre tú y el ojo, pero no puede pasar a otro plano de existencia. Si una barrera sólida bloquea el movimiento del ojo, este es capaz de cruzar a través de orificios con un diámetro de al menos 1 pulgada."
    },
    {
      name: "Mano de Bigby",
      level: 5,
      school: "Evocación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Creas una mano de fuerza de tamaño grande, destellante y translúcida en un espacio desocupado que puedas ver dentro del alcance. La mano permanece hasta el final de la duración del conjuro, moviéndose bajo tus órdenes e imitando el movimiento de tu propia mano. La mano es un objeto con CA 20 y puntos de golpe iguales a tus puntos de golpe máximos. Si sus puntos de golpe se reducen a 0, el conjuro termina. Su Fuerza es 26 (+8) y su Destreza 10 (+0). La mano no ocupa el espacio en el que está. Cuando lanzas el conjuro, y como acción adicional en turnos subsiguientes, puedes mover la mano hasta 60 pies y luego crear uno de los siguientes efectos con ella: Puño Cerrado: La mano golpea a una criatura u objeto a 5 pies de distancia o menos. Realiza un ataque cuerpo a cuerpo con la mano utilizando tus propias estadísticas de juego. Si impactas, el objetivo recibe 4d8 de daño de fuerza. Mano Contundente: La mano intenta empujar a una criatura a 5 pies o menos en la dirección que elijas. Realiza una tirada enfrentada de Fuerza de la mano contra una prueba de Fuerza (Atletismo) del objetivo. Tienes ventaja en la tirada si el objetivo es de tamaño Mediano o más pequeño. Si tienes éxito, la mano empuja al objetivo hasta 5 pies más cinco veces tu modificador de habilidad de lanzamiento de conjuros. La mano se desplaza con el objetivo para mantenerse a 5 pies de distancia. Mano Apresadora: La mano intenta agarrar a una criatura de tamaño Enorme o más pequeño a 5 pies de distancia. Utiliza la Fuerza de la mano para resolver el agarre. Tienes ventaja en la tirada si el objetivo es de tamaño Mediano o más pequeño. Mientras la mano esté agarrando al objetivo, puedes usar una acción adicional para aplastarlo, infligiendo 2d6 + tu modificador de habilidad de lanzamiento de conjuros de daño contundente. Mano Interpuesta: La mano se interpone entre tú y una criatura hasta que le des una orden distinta. La mano se mueve para mantenerse entre tu objetivo y tú, proporcionándote cobertura media contra este. El objetivo no puede atravesar el espacio de la mano si su Fuerza es igual o menor a la de la mano. Si su Fuerza es mayor, puede moverse hacia ti a través del espacio de la mano, pero ese espacio se considera terreno difícil para el objetivo."
    },
    {
      name: "Cerradura Arcana",
      level: 2,
      school: "Abjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Hasta que sea disipado",
      description: "Tocas una puerta, ventana, portón, cofre o cualquier entrada que esté cerrada con llave o pestillo. Queda completamente cerrado, como con llave, hasta el final de la duración del conjuro. Al lanzarlo, puedes decidir qué criaturas podrán abrir el objeto con normalidad. También puedes establecer una contraseña que, al ser pronunciada en voz alta a 5 pies o menos del objeto, suprime el conjuro durante 1 minuto. En cualquier otro caso, el objeto no se puede abrir a menos que sea destruido o se suprima o disipe el conjuro. Lanzar 'abrir' en el objeto suprime la 'cerradura arcana' durante 10 minutos. Mientras permanezca afectado por este conjuro, el objeto es más difícil de romper o forzar; la CD para romperlo o forzar la cerradura aumenta en 10."
    },
    {
      name: "Espada de Mordenkainen",
      level: 7,
      school: "Evocación",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Creas un plano de fuerza en forma de espada que levita dentro del alcance y permanece hasta el final de la duración del conjuro. Cuando haces aparecer la espada, puedes realizar un ataque de conjuro cuerpo a cuerpo contra una criatura que se encuentre a 5 pies del arma. Si impactas, el objetivo recibe 3d10 de daño de fuerza. Hasta el final del conjuro, puedes usar una acción adicional en cada uno de tus turnos para mover la espada hasta 20 pies a un punto que puedas ver y repetir este ataque contra el mismo objetivo o uno nuevo."
    },
    {
      name: "Aura Mágica de Nystul",
      level: 2,
      school: "Ilusión",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "24 horas",
      description: "Implantas una ilusión en una criatura u objeto que tocas, de tal manera que los conjuros de adivinación proporcionan información falsa sobre este. El objetivo puede ser una criatura voluntaria o un objeto que puedas ver y que no lleve o vista otra criatura. Cuando lanzas este conjuro, elige uno o los dos efectos siguientes. Permanecerán hasta el final de la duración del conjuro. Si lanzas este conjuro sobre la misma criatura u objeto cada día durante 30 días, eligiendo el mismo efecto cada vez, la ilusión durará hasta que sea disipada. Aura falsa: Cambias el modo en que el objetivo se muestra a conjuros y efectos mágicos como detectar magia, que perciben auras mágicas. Puedes hacer que un objeto no mágico parezca mágico, que un objeto mágico parezca no mágico, o cambiar el aura del objeto para que aparente pertenecer a una escuela de magia específica de tu elección. Cuando utilizas este efecto en un objeto, puedes hacer que resulte obvio para cualquier criatura que coja y manipule el objeto que su esencia mágica es falsa. Enmascarar: Cambias cómo el objetivo se muestra a conjuros y efectos mágicos que detectan tipos de criatura o alineamiento, como los Sentidos Divinos del paladín o el conjuro símbolo. Elige un tipo de criatura o un alineamiento. El resto de conjuros y efectos mágicos tratarán al objetivo como si fuera una criatura de ese tipo o alineamiento."
    },
    {
      name: "Proyección Astral",
      level: 9,
      school: "Nigromancia",
      classes: [
        "Clérigo",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "10 pies",
      duration: "Especial",
      description: "Tú y hasta ocho criaturas voluntarias dentro del alcance proyectáis vuestros cuerpos astrales en el Plano Astral (el conjuro falla y el espacio de conjuro se pierde si ya estás en este plano). El cuerpo material que dejas atrás queda inconsciente y en un estado de animación suspendida; no necesita comida ni aire y no envejece. Tu cuerpo astral es semejante a tu cuerpo material en casi todo, posee tu mismo perfil y tus mismas posesiones. La diferencia principal es un cordón plateado que sale de entre los omóplatos de la forma astral y flota detrás de ella, desvaneciéndose hasta hacerse invisible a 1 pie de distancia. Este cordón es el ancla a tu cuerpo material. Mientras se mantenga intacto, puedes encontrar el camino a casa. Si el cordón se corta (algo que solo puede ocurrir si un efecto específico así lo indica), tu alma y tu cuerpo quedan separados, provocando tu muerte instantánea. Tu forma astral puede viajar libremente a través del Plano Astral y pasar a través de portales que lleven a otros planos. Si cambias de plano o vuelves al plano en el que te encontrabas cuando lanzaste el conjuro, tu cuerpo y tus posesiones te siguen a través del cordón plateado, permitiéndote volver a habitar tu cuerpo al entrar al nuevo plano. Tu forma astral es una encarnación separada. Cualquier daño u otros efectos que se apliquen a ella no tienen consecuencia alguna en tu cuerpo material ni se mantienen cuando vuelves a este. El conjuro termina para ti y tus compañeros cuando utilizas una acción para finalizarlo. Cuando el conjuro termina, las criaturas afectadas vuelven a su cuerpo material y despiertan. El conjuro también puede terminar antes de tiempo para ti o uno de tus compañeros. Lanzar disipar magia con éxito contra un cuerpo astral o material termina el conjuro para esa criatura. Si el cuerpo material de una criatura o los puntos de golpe de su forma astral se reducen a 0, el conjuro termina para esa criatura. Si el conjuro termina y el cordón plateado sigue intacto, este tira de la forma astral de la criatura y la devuelve a su cuerpo material, concluyendo su estado de animación suspendida. Si vuelves a tu cuerpo prematuramente, tus compañeros permanecen en sus formas astrales y deben encontrar su propio camino de vuelta a sus cuerpos, normalmente llegando a 0 puntos de golpe."
    },
    {
      name: "Augurio",
      level: 2,
      school: "Adivinación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Personal",
      duration: "Instantáneo",
      description: "Lanzando huesos de dragón, tirando palitos con gemas incrustadas, echando las cartas o mediante otro método de adivinación, consigues que una entidad de otro mundo te otorgue un presagio sobre los resultados de una acción concreta que planees llevar a cabo en los próximos 30 minutos. El DM elige de entre los siguientes presagios: Fortuna para resultados buenos, Desdicha para resultados malos, Fortuna y desdicha para resultados a la vez buenos y malos, Nada para resultados que no son particularmente buenos ni malos. Este conjuro no tiene en cuenta ninguna circunstancia que pueda alterar los resultados, como por ejemplo el lanzamiento de otros conjuros o la pérdida o encuentro de un compañero. Si se lanza dos veces o más antes del próximo descanso largo, hay una posibilidad acumulativa del 25% por cada lanzamiento después del primero de recibir un presagio aleatorio. El DM realiza esta tirada en secreto."
    },
    {
      name: "Despertar",
      level: 5,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "8 horas",
      range: "Toque",
      duration: "Instantáneo",
      description: "Después de emplear el tiempo de lanzamiento en trazar dibujos mágicos en el interior de la piedra preciosa tocas a una bestia o planta de tamaño Enorme o menor. El objetivo debe tener una puntuación de Inteligencia de 3 o menos (o incluso no tener puntuación de Inteligencia). La puntuación de Inteligencia del objetivo pasa a ser 10. Además, gana la capacidad de hablar un idioma que tú conozcas. Si el objetivo es una planta, obtiene la capacidad de mover sus miembros, raíces, vides, enredaderas, etc., y gana sentidos parecidos a los humanos. Tu DM elige un perfil adecuado a la planta que has despertado, como por ejemplo el de un arbusto despertado o un árbol despertado. El objetivo despertado permanece hechizado por ti durante 30 días o hasta que tú o tus compañeros le causéis daño. Cuando el estado \"hechizado\" termina, la criatura despertada decide si sigue siendo amistosa hacia ti o no, dependiendo de cómo la trataras cuando estaba hechizada."
    },
    {
      name: "Perdición",
      level: 1,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Hasta tres criaturas de tu elección que puedas ver dentro del alcance deben hacer tiradas de salvación de Carisma. Siempre que un objetivo falle esta tirada de salvación al hacer una tirada de ataque o una tirada de salvación antes de que el conjuro termine, el objetivo debe tirar un d4 y restar el número obtenido de la tirada de ataque o de salvación."
    },
    {
      name: "Destierro",
      level: 4,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Paladín",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Intentas enviar a otro plano de existencia a una criatura que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Carisma o ser desterrado. Si el objetivo es nativo del plano en que estás, la criatura se desvanece a un semiplano inofensivo. Estará incapacitada mientras se encuentre en él y permanecerá en dicho semiplano hasta el final del conjuro, momento en el cual reaparecerá en el espacio que ocupaba antes o en el más cercano disponible si ese ya está ocupado. Si el objetivo es nativo de un plano diferente al que estás, desaparece y vuelve a su plano natal. Si el conjuro termina antes de que pase 1 minuto, el objetivo reaparecerá en el espacio que ocupaba antes o en el más cercano disponible si ese ya está ocupado. Si no, el objetivo no vuelve. A niveles superiores. Cuando lanzas este conjuro utilizando un espacio de conjuro de nivel 5 o más puedes elegir como objetivo a una criatura adicional por cada nivel por encima de 4 que tenga el espacio que hayas empleado."
    },
    {
      name: "Piel Robliza",
      level: 2,
      school: "Transmutación",
      classes: [
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración, hasta 1 hora",
      description: "Tocas a una criatura voluntaria. Hasta el final de la duración del conjuro la piel del objetivo se vuelve áspera con apariencia de corteza y su CA no podrá ser menor de 16, independientemente de la armadura que lleve."
    },
    {
      name: "Señal de Esperanza",
      level: 3,
      school: "Abjuración",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Este conjuro proporciona esperanza y vitalidad. Elige cualquier número de criaturas dentro del alcance. Hasta el final de la duración del conjuro, todos los objetivos tienen ventaja en sus tiradas de salvación de Sabiduría y sus tiradas de salvación contra muerte. Además, al recibir cualquier tipo de curación, recuperan la cantidad máxima posible de puntos de golpe."
    },
    {
      name: "Imponer Maldición",
      level: 3,
      school: "Nigromancia",
      classes: [
        "Bardo",
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración hasta 1 minuto",
      description: "Tocas a una criatura que debe superar una tirada de salvación de Sabiduría o quedar maldita hasta el final de la duración del conjuro. Cuando lanzas este conjuro elige la naturaleza de la maldición de entre las siguientes opciones: Elige una puntuación de característica. Mientras está maldito el objetivo tiene desventaja en las pruebas de característica y tiradas de salvación de dicha característica. Hasta el final de la duración del conjuro el objetivo sufre desventaja en sus tiradas de ataque contra ti. Mientras siga maldito el objetivo debe realizar una tirada de salvación de Sabiduría al principio de cada turno. Si fracasa gasta su acción de ese turno en no hacer nada. Mientras el objetivo siga maldito tus ataques y conjuros le hacen 1d8 puntos extra de daño necrótico adicional. El conjuro levantarmaldición termina estos efectos. Bajo la discreción del DM puedes elegir un efecto alternativo para la maldición pero no debería ser más poderoso que los descritos más arriba. El DM tiene la última palabra sobre los efectos de una maldición."
    },
    {
      name: "Tentáculos Negros de Evard",
      level: 4,
      school: "Conjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "90 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Una masa de tentáculos del color del ébano que se retuercen cubre un cuadrado de 20 pies que puedas ver dentro del alcance. Hasta el final de la duración del conjuro, estos tentáculos transforman el suelo del área en terreno difícil. Cuando una criatura entra en el área por primera vez en un turno o comienza su turno en ella, deberá tener éxito en una tirada de salvación de Destreza o recibirá 3d6 de daño contundente y quedará apresada por los tentáculos hasta el final del conjuro. Una criatura que comience su turno en el área y que ya estuviera apresada por los tentáculos recibe 3d6 de daño contundente. Una criatura apresada puede utilizar su acción para hacer una prueba de Fuerza o Destreza (a su elección) con CD igual a tu salvación de conjuros. Si tiene éxito, queda libre.",
      damage: "Nivel 4: 3d6"
    },
    {
      name: "Barrera de Cuchillas",
      level: 6,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "90 pies",
      duration: "Concentración, hasta 10 minutos",
      description: "Creas un muro vertical de cuchillas giratorias afiladas y hechas de energía mágica. Este aparece dentro del alcance y permanece hasta el final de la duración del conjuro. Puedes crear un muro recto de hasta 100 pies de largo, 20 pies de alto y 5 pies de ancho, o un muro en forma de anillo de hasta 60 pies de diámetro, 20 pies de alto y 5 pies de ancho. En cualquier caso, proporciona cobertura tres cuartos a las criaturas detrás de él y su espacio se considera terreno difícil. Cuando una criatura entra en el área del muro por primera vez en un turno o cuando empiece su turno en ella, deberá realizar una tirada de salvación de Destreza. Si falla, sufrirá 6d10 de daño cortante. Si tiene éxito, recibirá la mitad de daño.",
      damage: "Nivel 6: 6d10"
    },
    {
      name: "Bendición",
      level: 1,
      school: "Encantamiento",
      classes: [
        "Clérigo",
        "Paladín"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Bendices hasta tres criaturas de tu elección dentro del alcance. Hasta el final de la duración del conjuro, cuando uno de los objetivos haga una tirada de ataque o una tirada de salvación, puede tirar 1d4 y añadir el resultado a esa tirada."
    },
    {
      name: "Marchitar",
      level: 4,
      school: "Nigromancia",
      classes: [
        "Druida",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Instantáneo",
      description: "La energía nigromántica baña a una criatura de tu elección que puedas ver dentro del alcance, drenando sus fluidos y energías vitales. El objetivo debe realizar una tirada de salvación de Constitución. Sufrirá 8d8 de daño necrótico si falla la tirada, o la mitad del daño si la supera. Este conjuro no afecta a muertos vivientes o autómatas. Si eliges como objetivo a una criatura de tipo 'planta' o a una planta mágica, esta realiza la tirada con desventaja y el conjuro le hace el máximo daño. Si eliges a una planta no mágica que no sea una criatura, como un árbol o un arbusto, no hace falta una tirada de salvación; simplemente se marchitará y morirá.",
      damage: "Nivel 4: 8d8, Nivel 5: 9d8, Nivel 6: 10d8, Nivel 7: 11d8, Nivel 8: 12d8, Nivel 9: 13d8"
    },
    {
      name: "Sordera/Ceguera",
      level: 2,
      school: "Nigromancia",
      classes: [
        "Bardo",
        "Clérigo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "1 minuto",
      description: "Eres capaz de cegar o ensordecer a un enemigo. Selecciona una criatura dentro de tu alcance y a la cual puedas ver para que realice una tirada de salvación de Constitución. En caso de fracasar, la criatura es cegada o ensordecida (según tu elección) hasta el final del conjuro. Al concluir cada uno de sus turnos, el objetivo puede realizar otra tirada de salvación de Constitución. Si tiene éxito, el conjuro termina para él."
    },
    {
      name: "Desplazamiento",
      level: 3,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "1 minuto",
      description: "Lanza 1d20 al final de cada uno de tus turnos hasta el final de la duración del conjuro. Si el resultado es 11 o más, desapareces de tu plano de existencia actual y apareces en el Plano Etéreo (el conjuro falla y el espacio se pierde si ya estabas en ese plano). Al principio de tu siguiente turno (y si el conjuro acaba mientras estás en el Plano Etéreo), vuelves a un espacio de tu elección que puedas ver a 10 pies del espacio del que desapareciste. Si no hay ningún espacio libre dentro del alcance, apareces en el espacio desocupado más próximo (elige al azar si hay más de un espacio a la misma distancia). Puedes terminar el conjuro utilizando una acción. Mientras estés en el Plano Etéreo, eres capaz de ver y oír lo que ocurre en el plano del que vienes aunque lo percibes en tonos de gris y solo puedes ver a 60 pies de distancia. Únicamente puedes afectar y ser afectado por otras criaturas en el Plano Etéreo. Las criaturas que no están en dicho plano no pueden percibirte o interactuar contigo a menos que tengan una habilidad específica para ello."
    },
    {
      name: "Contorno Borroso",
      level: 2,
      school: "Ilusión",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 minuto",
      description: "El contorno de tu cuerpo se vuelve borroso, cambiando y oscilando a la vista de todos. Hasta el final de la duración del conjuro, las criaturas que hagan tiradas de ataque contra ti tienen desventaja. El atacante es inmune a este efecto si no necesita ver (si, por ejemplo, tiene visión ciega) o ve a través de las ilusiones (como con visión verdadera)."
    },
    {
      name: "Castigo Marcador",
      level: 2,
      school: "Evocación",
      classes: [
        "Paladín"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción adicional",
      range: "Lanzador",
      duration: "Concentración hasta 1 minuto",
      description: "La próxima vez que impactes a una criatura con un ataque con arma cuerpo a cuerpo antes del final de la duración del conjuro, tu arma brilla con un resplandor astral. El ataque inflige 2d6 de daño adicionales al objetivo que además se torna visible si era invisible. El objetivo emite luz tenue en un radio de 5 pies y no puede volverse invisible hasta el final de la duración del conjuro.",
      damage: "Nivel 2: 2d6, Nivel 3: 3d6, Nivel 4: 4d6, Nivel 5: 5d6, Nivel 6: 6d6, Nivel 7: 7d6, Nivel 8: 8d6, Nivel 9: 9d6"
    },
    {
      name: "Manos Ardientes",
      level: 1,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Juntas las manos con los pulgares tocándose y los dedos estirados creando una fina capa de llamas que se proyecta desde la punta de los dedos. Todas las criaturas en un cono de 15 pies deben hacer una tirada de salvación de Destreza. Sufrirán 3d6 de daño de fuego si fallan la tirada o la mitad del daño si la superan. Los objetos inflamables que se encuentren en el área que no lleve o vista alguien arderán.",
      damage: "Nivel 1: 3d6, Nivel 2: 4d6, Nivel 3: 5d6, Nivel 4: 6d6, Nivel 5: 7d6, Nivel 6: 8d6, Nivel 7: 9d6, Nivel 8: 10d6, Nivel 9: 11d6"
    },
    {
      name: "Llamar al Relámpago",
      level: 3,
      school: "Conjuración",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración, hasta 10 minutos",
      description: "Aparece una nube tormentosa en forma de cilindro de 10 pies de altura y 60 de radio centrada en un punto que puedas ver a 100 pies directamente encima de ti. El conjuro falla si no puedes contemplar un punto en el aire donde pueda aparecer la nube (por ejemplo, si estás en una habitación donde no quepa). Cuando lances el conjuro, elige un punto que puedas ver dentro del alcance. Un relámpago cae desde la nube a ese punto. Cada criatura a 5 pies o menos debe hacer una tirada de salvación de Destreza. Sufren 3d10 de daño de relámpago si fallan la tirada o la mitad del daño si la superan. En cada uno de tus turnos hasta el final del conjuro, puedes usar tu acción para llamar al relámpago de esta manera en el mismo punto o en otro distinto. Si cuando lanzas este conjuro estás al aire libre y hay tormenta, el conjuro te da el control de esta en lugar de crear una nueva. Bajo estas condiciones, el daño del conjuro aumenta en 1d10.",
      damage: "Nivel 3: 3d10, Nivel 4: 4d10, Nivel 5: 5d10, Nivel 6: 6d10, Nivel 7: 7d10, Nivel 8: 8d10, Nivel 9: 9d10"
    },
    {
      name: "Calmar Emociones",
      level: 2,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Intentas suprimir emociones fuertes en un grupo de gente. Cada humanoide en una esfera de 20 pies de radio centrada en un punto de tu elección dentro del alcance debe realizar una tirada de salvación de Carisma. Cualquiera de ellos puede elegir fallar la tirada voluntariamente si así lo desea. Si una criatura falla la tirada, elige uno de los dos efectos siguientes: Puedes suprimir cualquier efecto que mantenga al objetivo hechizado o asustado. Sin embargo, cuando este conjuro acabe, los efectos suprimidos vuelven a funcionar siempre que su duración no haya acabado. De modo alternativo, puedes hacer que un objetivo se vuelva indiferente hacia criaturas de tu elección con las que previamente era hostil. Esta indiferencia termina si el objetivo es atacado o dañado por un conjuro o si ve a alguno de sus amigos ser dañado. Cuando el conjuro acaba la criatura se vuelve hostil de nuevo, a menos que el DM decida otra cosa."
    },
    {
      name: "Relámpago en Cadena",
      level: 6,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "150 pies",
      duration: "Instantáneo",
      description: "Creas un relámpago que se dirige a un objetivo de tu elección que puedas ver dentro del alcance. De este objetivo saltan otros tres relámpagos hasta otros tres objetivos cada uno a 30 pies o menos del objetivo original. Cualquiera de los objetivos tiene que ser una criatura o un objeto y solo puede recibir uno de los relámpagos. Todos los objetivos deben hacer una tirada de salvación de Destreza. Sufrirán 10d8 de daño de relámpago si fallan la tirada o la mitad del daño si la superan.",
      damage: "Nivel 6: 10d8"
    },
    {
      name: "Hechizar Persona",
      level: 1,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Druida",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "1 hora",
      description: "Intentas hechizar a un humanoide que puedas ver dentro del alcance. El objetivo debe hacer una tirada de salvación de Sabiduría con ventaja si está luchando contra ti o tus compañeros. Si falla la tirada de salvación, queda hechizado por ti hasta que termine la duración del conjuro o tú mismo o uno de tus compañeros le dañéis de alguna manera. La criatura hechizada te considera un conocido amistoso. Cuando el conjuro termine, sabrá que la hechizaste."
    },
    {
      name: "Toque Helado",
      level: 0,
      school: "Nigromancia",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "1 asalto",
      description: "Creas una mano fantasmagórica en el espacio de una criatura dentro del alcance. Realiza un ataque de conjuro a distancia contra la criatura para agredirla con un frío sepulcral. Si impactas, el objetivo sufre 1d8 de daño necrótico y no podrá recuperar puntos de golpe hasta el comienzo de tu próximo turno. Hasta ese momento, la mano se aferra al objetivo. Si además el objetivo impactado es un muerto viviente, tendrá desventaja en sus tiradas de ataque contra ti hasta el final de tu próximo turno. A niveles superiores. El daño del conjuro aumenta en 1d8 cuando alcanzas nivel 5 (2d8), nivel 11 (3d8) y nivel 17 (4d8)."
    },
    {
      name: "Círculo de Muerte",
      level: 6,
      school: "Nigromancia",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "150 pies",
      duration: "Instantáneo",
      description: "Una esfera de energía negativa se expande hasta cubrir una esfera de 60 pies de radio alrededor de un punto dentro del alcance. Cada criatura en el área debe hacer una tirada de salvación de Constitución. Sufrirá 8d6 de daño necrótico si falla la tirada o la mitad del daño si la supera.",
      damage: "Nivel 6: 8d6, Nivel 7: 10d6, Nivel 8: 12d6, Nivel 9: 14d6"
    },
    {
      name: "Clarividencia",
      level: 3,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Clérigo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "1 milla",
      duration: "Concentración, hasta 10 minutos",
      description: "Creas un sensor invisible dentro del alcance en una ubicación familiar (que hayas visitado o visto antes) o en una ubicación obvia que no te resulte familiar (por ejemplo, detrás de una puerta, a la vuelta de una esquina, o en una arboleda). El sensor se mantiene en el sitio hasta el final de la duración del conjuro y no puede ser atacado ni interactuarse con él. Cuando lances el conjuro, elige vista u oído. Puedes usar el sentido escogido a través del sensor como si estuvieras en su espacio. Utilizando una acción, puedes cambiar entre vista y oído. Una criatura que pueda ver el sensor (porque se beneficie de un conjuro de ver invisibilidad o posea visión verdadera, por ejemplo) contempla un orbe luminoso e intangible del tamaño de tu puño."
    },
    {
      name: "Clon",
      level: 8,
      school: "Nigromancia",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "Toque",
      duration: "Instantáneo",
      description: "Este conjuro crea un duplicado inerte de una criatura viva como protección contra la muerte. El clon se forma dentro de un recipiente cerrado y crece hasta alcanzar la madurez en 120 días; también puedes optar por que el clon sea una versión más joven de la misma criatura. Se mantiene inerte y sobrevive indefinidamente, siempre y cuando el recipiente se mantenga intacto. En cualquier momento después de que el clon ha madurado, si la criatura original fallece, su alma se transfiere al clon, suponiendo que el alma esté libre y desee regresar, por supuesto. El clon es físicamente idéntico al original y posee la misma personalidad, memoria y habilidades, pero no conserva ningún equipo del original. Los restos físicos de la criatura original, si existen, se vuelven inertes y no pueden ser revividos ya que el alma de la criatura se encuentra en otro cuerpo."
    },
    {
      name: "Nube Aniquiladora",
      level: 5,
      school: "Conjuración",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Creas una nube venenosa de niebla amarillo-verdosa que cubre un área esférica de 20 pies de radio alrededor de un punto de tu elección. La niebla se extiende más allá de las esquinas. Se mantiene hasta el final de la duración del conjuro o hasta que un viento fuerte la disperse terminando el conjuro. El área se considera muy oscura. Cuando una criatura entre en el área del conjuro por primera vez en un turno o cuando empiece su turno en ella debe realizar una tirada de salvación de Constitución. Sufrirá 5d8 de daño de veneno si falla la tirada o la mitad del daño si la supera. La niebla afecta incluso a las criaturas que aguanten la respiración o que no necesiten respirar. La niebla se aleja 10 pies de ti al principio de cada uno de tus turnos siguiendo la superficie del terreno. Al ser más densa que el aire se desplazará hacia las cotas más bajas derramándose por las aperturas que encuentre.",
      damage: "Nivel 5: 5d8, Nivel 6: 6d8, Nivel 7: 7d8, Nivel 8: 8d8, Nivel 9: 9d8"
    },
    {
      name: "Rociada de Color",
      level: 1,
      school: "Ilusión",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "1 asalto",
      description: "Una rociada deslumbrante de luz destellante y coloreada surge de tu mano. Tira 6d10; podrás afectar a criaturas cuyo total combinado de puntos de golpe sea menor o igual al resultado. Las criaturas en un cono de 15 pies que surge de ti son afectadas en orden ascendente de sus puntos de golpe actuales (ignorando criaturas inconscientes o que no puedan ver). Empezando por la criatura que tenga el menor número de puntos de golpe actuales, cada objetivo afectado por este conjuro quedará cegado hasta el final del conjuro. Resta los puntos de golpe de cada criatura del total antes de continuar con la siguiente. Una criatura solo se verá afectada si sus puntos de golpe actuales son menores o iguales al total restante."
    },
    {
      name: "Orden Imperiosa",
      level: 1,
      school: "Encantamiento",
      classes: [
        "Clérigo",
        "Paladín"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "1 asalto",
      description: "Das una orden de una sola palabra a una criatura que puedas ver dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o verse obligada a obedecer la orden en su próximo turno. Este conjuro no tiene efecto si el objetivo es un muerto viviente, si no entiende tu idioma o si la orden implica dañar a la criatura de forma directa. Más abajo puedes encontrar ejemplos de órdenes típicas y sus efectos, aunque puedes dar otras distintas a las que se describen aquí. En ese caso, el DM decide cómo reacciona el objetivo. Si la criatura no puede obedecer la orden, el conjuro termina. ***Acércate.*** El objetivo se acerca a ti por el camino más corto y directo posible, acabando su turno si se mueve a 5 pies o menos de ti. ***Suelta.*** El objetivo suelta lo que esté sujetando y acaba su turno. ***Huye.*** El objetivo emplea su turno en alejarse de ti de la manera más rápida posible. ***Póstrate.*** El objetivo cae derribado y acaba su turno. ***Detente.*** El objetivo no se mueve ni realiza ninguna acción. Si le es posible, una criatura que esté volando permanecerá en el aire. Si para ello necesita moverse, volará la mínima distancia necesaria para no caer."
    },
    {
      name: "Comunión",
      level: 5,
      school: "Adivinación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Lanzador",
      duration: "1 minuto",
      description: "Entras en contacto con tu deidad o representante divino y haces tres preguntas que puedan ser respondidas con sí o no. Debes realizar las preguntas antes de que el conjuro termine y recibes una respuesta correcta para cada pregunta. Un ser divino no es necesariamente omnisciente así que puedes recibir \"incierto\" como respuesta si la pregunta se refiere a información más allá del conocimiento de la deidad. En el caso de que una respuesta de una sola palabra pueda inducir a error o sea contraria a los intereses de la deidad, el DM puede ofrecer una frase corta en su lugar. Si se lanza dos veces o más antes del próximo descanso largo, hay una posibilidad acumulativa del 25 % por cada lanzamiento después del primero de no recibir respuesta. El DM realiza esta tirada en secreto."
    },
    {
      name: "Comunión con la Naturaleza",
      level: 5,
      school: "Adivinación",
      classes: [
        "Druida",
        "Guardabosques"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 minuto",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Realizas una breve comunión con la naturaleza que te otorga cierto conocimiento sobre el terreno circundante. En exteriores, el conjuro te proporciona información sobre el terreno en 3 millas a tu alrededor. En una cueva u otra localización subterránea natural, el alcance se limita a 300 pies. Este conjuro no tiene efecto si la naturaleza ha sido sustituida por una construcción, como en una mazmorra o pueblo. Conoces de forma inmediata tres hechos de tu elección sobre cualquiera de los siguientes elementos relacionados con el terreno: - Terreno y masas de agua. - Plantas, minerales, animales y gentes comunes. - Seres poderosos de origen celestial, feérico, demoniaco, elemental o muertos vivientes. - Influencia de otros planos de existencia. - Edificios. Por ejemplo, podrías determinar la localización de muertos vivientes poderosos en el área, de masas de agua potable cercanas, y de cualquier pueblo en los alrededores."
    },
    {
      name: "Entender Idiomas",
      level: 1,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "1 hora",
      description: "Por la duración del conjuro, entiendes el significado literal de cualquier lenguaje hablado que oigas. También entiendes cualquier lenguaje escrito que veas, pero debes estar tocando la superficie en la que las palabras están escritas. Toma aproximadamente 1 minuto leer una página de texto. Este conjuro no decodifica mensajes secretos en un texto o un glifo, como un sello arcano, que no es parte de un lenguaje escrito."
    },
    {
      name: "Compulsión",
      level: 4,
      school: "Encantamiento",
      classes: [
        "Bardo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Una o más criaturas de tu elección que puedas ver dentro del alcance y que puedan oírte deben realizar una tirada de salvación de Sabiduría. Las criaturas inmunes a ser hechizadas tienen éxito automáticamente. Aquellas que fallen la tirada quedan afectadas por el conjuro. Hasta el final del conjuro, puedes usar una acción adicional en cada uno de tus turnos para designar una dirección horizontal respecto a ti. Cada criatura afectada debe usar todo el movimiento del que disponga para avanzar en esa dirección durante su próximo turno. Puede realizar una acción antes de mover. Además, después de avanzar, puede hacer otra tirada de salvación para intentar terminar el efecto. Una criatura afectada no está obligada a moverse dentro de un peligro mortal y obvio como una hoguera o un pozo, pero provocará ataques de oportunidad al moverse en la dirección señalada."
    },
    {
      name: "Cono de Frío",
      level: 5,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Una ráfaga de aire helado surge de tus manos. Cada criatura en un cono de 60 pies debe hacer una tirada de salvación de Constitución. Sufrirá 8d8 de daño de frío si falla la tirada, o la mitad del daño si la supera. Una criatura que muera a causa de este conjuro se convertirá en una estatua helada hasta que se deshiele.",
      damage: "Nivel 5: 8d8, Nivel 6: 9d8, Nivel 7: 10d8, Nivel 8: 11d8, Nivel 9: 12d8"
    },
    {
      name: "Confusión",
      level: 4,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "90 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Este conjuro ataca y retuerce la mente, creando ilusiones y provocando acciones incontroladas. Cada criatura en una esfera de 10 pies de radio centrada en un punto de tu elección dentro del alcance debe tener éxito en una tirada de salvación de Sabiduría o será afectada por el conjuro. Una criatura afectada no puede llevar a cabo reacciones y debe tirar ldlO al principio de cada uno de sus turnos para determinar cómo se comporta ese turno. dlO Comportamiento  La criatura emplea todo su movimiento en avanzar en una dirección aleatoria. Para determinar la dirección lanza l d8 asignando una dirección a cada cara del dado. La criatura no realiza acciones este turno. La criatura no se mueve o realiza acciones este turno. La criatura usa su acción para hacer un ataque cuerpo a cuerpo contra una criatura determinada aleatoriamente dentro de su alcance. Si no hay ninguna criatura dentro del alcance no hace nada este turno. La criatura puede actuar y moverse con normalidad. Al final de cada uno de sus turnos, el objetivo puede realizar otra tirada de salvación de Sabiduría; si tiene éxito, el conjuro termina para él."
    },
    {
      name: "Conjurar Animales",
      level: 3,
      school: "Conjuración",
      classes: [
        "Druida",
        "Montaraz"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 hora",
      description: "Convocas espíritus feéricos que toman la forma de bestias y aparecen en espacios desocupados que puedas ver dentro del alcance. Elige una de las siguientes opciones para lo que convocas: - Una bestia con valor de desafío 2 o menos - Dos bestias con valor de desafío 1 o menos - Cuatro bestias con valor de desafío 1/2 o menos - Ocho bestias con valor de desafío 1/4 o menos - Cada bestia se considera feérica y desaparece cuando sus puntos de golpe se reducen a 0 o el conjuro termina. Las bestias convocadas son amistosas hacia ti y tus compañeros. Las criaturas actúan como un grupo con sus propios turnos con una sola tirada de iniciativa común. Obedecen cualquier mandato verbal tuyo (no requiere acción). Si no les das ninguna orden, se defenderán de criaturas hostiles pero no realizarán ninguna otra acción. El DM tiene el perfil de las criaturas."
    },
    {
      name: "Conjurar Celestial",
      level: 7,
      school: "Conjuración",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 minuto",
      range: "90 pies",
      duration: "Concentración hasta 1 hora",
      description: "Invocas un celestial con valor de desafío 4 o menos en un espacio desocupado que puedas ver dentro del alcance. El celestial desaparece si sus puntos de golpe se reducen a 0 o el conjuro termina. Es amistoso hacia ti y tus compañeros hasta el final de la duración del conjuro. Haz una tirada de iniciativa para el celestial que tiene sus propios turnos. Obedecerá cualquier mandato verbal tuyo (no requiere acción) que no viole su alineamiento. Si no le das ninguna orden, se defenderá de criaturas hostiles pero no realizará ninguna otra acción. El DM tiene el perfil del celestial."
    },
    {
      name: "Conjurar Elemental",
      level: 5,
      school: "Conjuración",
      classes: [
        "Druida",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "90 pies",
      duration: "Concentración hasta 1 hora",
      description: "Invocas a un sirviente elemental. Elige un área de agua, aire, fuego o tierra dentro del alcance que llene un cubo de 10 pies de lado. Un elemental con valor de desafío 5 o menos y apropiado al área elegida aparece en un espacio desocupado a 10 pies de esta. Por ejemplo, un elemental de fuego emerge de una fogata y un elemental de tierra se alza de un suelo de tierra. El elemental desaparece si sus puntos de golpe se reducen a 0 o el conjuro termina. Es amistoso hacia ti y tus compañeros hasta el final de la duración del conjuro. Haz una tirada de iniciativa para el elemental, que tiene sus propios turnos. Obedece cualquier mandato verbal tuyo (no requiere acción). Si no le das ninguna orden, se defenderá de criaturas hostiles pero no realizará ninguna otra acción. Si tu concentración se rompe, el elemental no desaparece. En vez de eso, pierdes el control del elemental, que se vuelve hostil hacia ti y tus compañeros y podría atacaros. No puedes desconvocar a un elemental descontrolado, que desaparecerá 1 hora después de que lo invoques. El DM tiene el perfil del elemental. A niveles superiores. Cuando lanzas este conjuro utilizando un espacio de conjuro de nivel 6 o más, el valor de desafío del elemental aumenta en 1 por cada nivel por encima de 5 que tenga el espacio que hayas empleado."
    },
    {
      name: "Invocar Feérico",
      level: 6,
      school: "Conjuración",
      classes: [
        "Druida",
        "Brujo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 minuto",
      range: "90 pies",
      duration: "Concentración hasta 1 hora",
      description: "Invocas a una criatura feérica con valor de desafío 6 o menos o un espíritu feérico que toma la forma de una bestia con valor de desafío 6 o menos. Aparece en un espacio desocupado que puedas ver dentro del alcance. El feérico desaparece si sus puntos de golpe se reducen a 0 o el conjuro termina. Es amistoso hacia ti y tus compañeros hasta el final de la duración del conjuro. Haz una tirada de iniciativa para el feérico, que tiene sus propios turnos. Obedecerá cualquier mandato verbal tuyo (no requiere acción) que no viole su alineamiento. Si no le das ninguna orden, se defenderá de criaturas hostiles pero no realizará ninguna otra acción. Si tu concentración se rompe, el feérico no desaparece. En vez de eso pierdes el control del feérico, que se vuelve hostil hacia ti y tus compañeros y podría atacar. No puedes desconvocar al feérico descontrolado, que desaparecerá 1 hora después de que lo invoques. El DM tiene el perfil de las criaturas."
    },
    {
      name: "Conjurar Elementales Menores",
      level: 4,
      school: "Conjuración",
      classes: [
        "Druida",
        "Hechicero"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 minuto",
      range: "90 pies",
      duration: "Concentración hasta 1 hora",
      description: "Convocas elementales en espacios desocupados que puedas ver dentro del alcance. Elige una de las siguientes opciones para lo que convocas: - Un elemental con valor de desafío 2 o menos. - Dos elementales con valor de desafío 1 o menos. - Cuatro elementales con valor de desafío 1/2 o menos. - Ocho elementales con valor de desafío 1/4 o menos. Un elemental convocado por este conjuro desaparece si llega a 0 puntos de golpe o cuando el conjuro termina. Las criaturas convocadas son amistosas hacia ti y tus compañeros. Las criaturas actúan como un grupo con sus propios turnos con una sola de tirada de iniciativa común. Obedecen cualquier mandato verbal tuyo (no requiere acción). Si no les das ninguna orden, se defenderán de criaturas hostiles pero no realizarán ninguna otra acción. El DM tiene el perfil de las criaturas."
    },
    {
      name: "Conjurar Seres del Bosque",
      level: 4,
      school: "Conjuración",
      classes: [
        "Druida",
        "Guardabosques"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 hora",
      description: "Convocas criaturas feéricas en espacios desocupados que puedas ver dentro del alcance. Elige una de las siguientes opciones para lo que convocas: - Una bestia con valor de desafío 2 o menos - Dos bestias con valor de desafío 1 o menos - Cuatro bestias con valor de desafío 1/2 o menos - Ocho bestias con valor de desafío 1/4 o menos Cada bestia se considera feérica y desaparece cuando sus puntos de golpe se reducen a 0 o el conjuro termina. Las bestias convocadas son amistosas hacia ti y tus compañeros. Las criaturas actúan como un grupo con sus propios turnos con una sola tirada de iniciativa común. Obedecen cualquier mandato verbal tuyo (no requiere acción). Si no les das ninguna orden se defenderán de criaturas hostiles pero no realizarán ninguna otra acción. El DM tiene el perfil de las criaturas."
    },
    {
      name: "Contactar con otro plano",
      level: 5,
      school: "Adivinación",
      classes: [
        "Brujo",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 minuto",
      range: "Lanzador",
      duration: "1 minuto",
      description: "Contactas mentalmente con un semidiós, el espíritu de un sabio muerto hace tiempo, u otra entidad misteriosa de otro plano. Establecer comunicación con estas inteligencias extraplanares puede causar estragos o incluso destruir tu mente. Cuando lances este conjuro haz una tirada de salvación de Inteligencia CD 15. Si fallas, recibes 6d6 de daño psíquico y quedas enloquecido hasta que termines un descanso largo. Mientras estás enloquecido, no puedes realizar acciones, no entiendes lo que otras criaturas dicen, no puedes leer, y solo dices jerigonzas. Un conjuro de restauración mayor lanzado sobre ti termina este efecto. Si pasas la tirada de salvación, puedes hacer cinco preguntas a la entidad. Debes realizar las preguntas antes de que el conjuro termine. El DM responde a las preguntas con una palabra como \"sí\", \"no\", \"quizá\", \"nunca\", \"irrelevante\", o \"incierto\" (si la entidad no conoce la respuesta a la pregunta). En el caso de que una respuesta de una sola palabra pueda inducir a error, el DM puede ofrecer una frase corta en su lugar."
    },
    {
      name: "Contagio",
      level: 5,
      school: "Nigromancia",
      classes: [
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "7 días",
      description: "Tu toque causa enfermedades. Haz un ataque de conjuro cuerpo a cuerpo contra una criatura dentro del alcance. Si impactas infliges al objetivo una dolencia de entre las descritas debajo. Al final de cada uno de sus turnos el objetivo debe realizar una tirada de salvación de Constitución. Si falla tres tiradas la enfermedad permanecerá hasta el final de la duración del conjuro y la criatura dejará de hacer estas tiradas. Si supera tres tiradas el objetivo se recuperará de la enfermedad y el conjuro terminará. La enfermedad inducida por este conjuro es natural, por lo que cualquier efecto que elimine o reduzca los efectos de una dolencia se aplica a este caso. ***Enfermedad cegadora.*** El dolor atenaza la mente de la criatura mientras sus ojos se vuelven de color blanco lechoso. Queda cegada y tiene desventaja en las tiradas de salvación y pruebas de Sabiduría. ***Fiebre inmunda.*** Una fiebre rabiosa barre el cuerpo de la criatura. Tiene desventaja en pruebas y tiradas de salvación de Fuerza y tiradas de ataque que utilicen Fuerza como característica. ***Putrefacción de la carne.*** La carne de la criatura comienza a descomponerse. Tiene desventaja en pruebas de Carisma y es vulnerable a todo tipo de daño. ***Mente en llamas.*** La mente de la criatura se vuelve febril. La criatura tiene desventaja en pruebas y tiradas de salvación de Inteligencia. Además en combate se comporta como si estuviera bajo los efectos del conjuro confusión. ***Convulsiones.*** La criatura se ve afligida por horribles temblores. Tiene desventaja en pruebas y tiradas de salvación de Destreza y tiradas de ataque que utilicen Destreza como característica. ***Mal de ojo.*** La criatura comienza a sangrar incontrolablemente. Tiene desventaja en pruebas y tiradas de salvación de Constitución. Además, cada vez que la criatura recibe daño, queda aturdida hasta el final de su próximo turno."
    },
    {
      name: "Contingencia",
      level: 6,
      school: "Evocación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "Lanzador",
      duration: "10 días",
      description: "Elige un conjuro de nivel 5 o menor que puedas lanzar, que tenga un tiempo de lanzamiento de 1 acción y que pueda hacerte objetivo. Lanzas ese conjuro, llamado el conjuro contingente, como parte de lanzar contingencia, empleando espacios de conjuro para ambos, pero el conjuro contingente no tiene efecto en ese momento. En vez de eso, tendrá efecto cuando ocurra una determinada situación que describes al lanzar los dos conjuros. Por ejemplo, una contingencia lanzada con respirar bajo el agua podría estipular que respirar bajo el agua comenzará cuando quedes sumergido en agua o un líquido similar. El conjuro contingente tiene efecto inmediatamente después de que ocurra la situación establecida por primera vez, lo quieras o no, y después contingencia termina. El conjuro contingente solo puede tener efecto en ti, incluso si normalmente puede elegir como objetivo a otros. Solo eres capaz de tener un conjuro de contingencia activo al mismo tiempo. Si lanzas este conjuro de nuevo, el efecto de una contingencia anterior termina. Además, contingencia finaliza si en cualquier momento dejas de llevar encima su componente material."
    },
    {
      name: "Llama permanente",
      level: 2,
      school: "Evocación",
      classes: [
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Hasta que sea disipado",
      description: "Una llama equivalente en brillo a una antorcha surge de un objeto que toques. Este efecto parece una llama normal pero no genera calor ni quema oxígeno. Una llama permanente puede ser cubierta o escondida pero no ahogada o extinguida."
    },
    {
      name: "Controlar Agua",
      level: 4,
      school: "Transmutación",
      classes: [
        "Clérigo",
        "Druida",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "300 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Hasta que el conjuro termine, controlas cualquier masa de agua que no esté en movimiento dentro de un área de tu elección con forma de cubo de hasta 100 pies de lado. Cuando lanzas este conjuro elige uno de los siguientes efectos. Como una acción en tu turno, puedes repetir el mismo efecto o elegir uno nuevo. ***Inundación.*** Haces que el nivel de toda el agua estancada en al área suba hasta 20 pies. Si esta área incluye una orilla, el agua inunda la tierra seca circundante. Si eliges un área en una masa de agua, en vez de eso creas una ola de 20 pies de altura que viaja de un lado de la masa de agua al otro y después rompe. Cualquier vehículo de tamaño Enorme o menor en el camino de la ola es transportado al otro lado. Además, tiene un 25 % de posibilidades de volcar. El nivel del agua se mantiene elevado hasta que termine el conjuro o elijas un efecto diferente. Si este efecto ha creado una ola, esta se repite al principio de tu próximo turno mientras el efecto de la inundación permanezca. ***Abrir las aguas.*** Haces que el agua del área se aparte creando una zanja. Se extiende a lo largo del área del conjuro con el agua separada formando un muro a cada lado. La zanja permanece hasta que el conjuro termine o elijas un efecto diferente. En ese caso, el agua llena lentamente la zanja durante el transcurso del siguiente asalto hasta que el nivel normal del agua se haya restablecido. ***Redirigir caudal.*** Obligas a un flujo de agua corriente en el área a moverse en la dirección de tu elección, incluso si tiene que fluir a través de obstáculos, escalar muros o tomar otras direcciones improbables. El agua del área se mueve según indiques, pero una vez que salga del área del conjuro, vuelve a fluir de forma natural de acuerdo a las condiciones del terreno. El agua continúa moviéndose en la dirección de tu elección hasta que el conjuro termine o elijas un efecto diferente. ***Remolino.*** Este efecto necesita que la masa de agua sea de al menos 50 pies cuadrados y tenga 25 pies de profundidad. Creas un remolino en el centro del área. Esto produce un vórtice de 5 pies de ancho en la base hasta 50 pies de ancho en la parte más alta y hasta 25 pies de profundidad. Cualquier objeto o criatura en el agua y a 25 pies o menos del remolino se ve atraída 10 pies hacia él. Una criatura puede alejarse nadando del vórtice mediante una prueba de Fuerza (Atletismo) con CD igual a tu salvación de conjuros. Cuando una criatura entra en el área del remolino por primera vez en un turno o cuando empieza su turno en ella debe realizar una tirada de salvación de Fuerza. Si fracasa, la criatura recibe 2d8 de daño contundente y queda atrapada en el vórtice hasta que el conjuro termine. Si la supera, recibe la mitad del daño y no queda atrapada. Una criatura atrapada en el remolino puede usar su acción para intentar alejarse de él de la manera descrita más arriba, pero tiene desventaja en la prueba de Fuerza (Atletismo) necesaria.",
      damage: "Nivel 4: 2d8"
    },
    {
      name: "Controlar el clima",
      level: 8,
      school: "Transmutación",
      classes: [
        "Clérigo",
        "Druida",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "Lanzador (radio de 5 millas)",
      duration: "Concentración hasta 8 horas",
      description: "Tomas el control del tiempo atmosférico en un radio de 5 millas alrededor de ti hasta el final de la duración del conjuro. Debes estar al aire libre para poder lanzar este conjuro. Si te mueves a un sitio donde no puedas ver el cielo el conjuro termina antes de tiempo. Cuando lanzas el conjuro cambias las condiciones atmosféricas actuales determinadas por el DM de acuerdo al clima y la estación. Puedes modificar las precipitaciones, temperatura y viento. Tardas 1d4 x 10 minutos en llevar este cambio a término. Cuando termines puedes cambiar las condiciones de nuevo si así lo deseas. Al terminar el conjuro el tiempo vuelve a la normalidad gradualmente. Cuando manipules las condiciones atmosféricas encuentra el estado actual en las siguientes tablas y cámbialo un nivel, hacia arriba o hacia abajo. Cuando actúes sobre el viento puedes modificar su dirección. ##### Precipitaciones | Nivel | Estado | |---|---| | 1 | Despejado | | 2 | Nubes escasas | | 3 | Cielo cubierto o niebla de superficie | | 4 | Lluvia, granizo o nieve | | 5 | Lluvia torrencial, tormenta de granizo o ventisca | ##### Temperatura | Nivel | Estado | |---|---| | 1 | Calor insoportable | | 2 | Caliente | | 3 | Templado | | 4 | Fresco | | 5 | Frío | | 6 | Frío polar | ##### Viento | Nivel | Estado | |---|---| | 1 | Calmo | | 2 | Viento moderado | | 3 | Viento fuerte | | 4 | Galerna | | 5 | Tempestad |"
    },
    {
      name: "Contrahechizo",
      level: 3,
      school: "Abjuración",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "S"
      ],
      castingTime: "1 reacción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Intentas interrumpir a una criatura mientras lanza un conjuro. Si este último es de nivel 3 o menor lo logras automáticamente y el conjuro no tiene efecto alguno. Sin embargo, para cada conjuro de nivel 4 o más, realiza una prueba de característica usando tu aptitud mágica. La CD es 10 + el nivel del conjuro. Si tienes éxito, el conjuro de la criatura falla y no tiene efecto."
    },
    {
      name: "Crear Comida y Agua",
      level: 3,
      school: "Conjuración",
      classes: [
        "Clérigo",
        "Druida",
        "Paladín"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Instantáneo",
      description: "Creas 45 libras de comida y 30 galones de agua en el suelo o en recipientes dentro del alcance, lo suficiente para mantener a quince humanoides o cinco corceles durante 24 horas. La comida es sosa aunque nutritiva y se estropeará si no se ha consumido en 24 horas. En cambio, el agua está limpia y no se estropea."
    },
    {
      name: "Crear muerto viviente",
      level: 6,
      school: "Nigromancia",
      classes: [
        "Clérigo",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "10 pies",
      duration: "Instantáneo",
      description: "Este conjuro solo puede lanzarse de noche. Elige hasta tres cadáveres de humanoide de tamaño Mediano o Pequeño. Deben estar dentro del alcance. Cada uno de ellos se convierte en un gul bajo tu control (el DM tiene los perfiles de estas criaturas.) En cada turno puedes usar una acción adicional para dar una orden mental a cualquier criatura creada mediante este conjuro si está a 120 pies o menos de ti (si controlas varias criaturas puedes dirigir a una o más de ellas utilizando la misma orden). Decides qué acción va a tomar la criatura y dónde se moverá durante su próximo turno. También puedes dar una orden general como vigilar una cámara o pasillo en concreto. Si no indicas ninguna orden la criatura se limita a defenderse de otras criaturas hostiles. Una vez que recibe una orden la sigue hasta cumplirla. La criatura se mantiene bajo tu control durante 24 horas después de las cuales abandonará cualquier orden que hayas dado. Para mantener el control sobre ella durante otras 24 horas debes lanzar este conjuro de nuevo sobre ella antes de que el periodo actual de 24 horas termine. Puedes usar este conjuro para reafirmar tu control sobre hasta tres criaturas que hayas animado previamente con este conjuro en vez de reanimar nuevos cadáveres."
    },
    {
      name: "Crear o Destruir Agua",
      level: 1,
      school: "Transmutación",
      classes: [
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Instantáneo",
      description: "Creas o destruyes agua. ***Crear Agua.*** Creas hasta 10 galones de agua limpia en un recipiente dentro del alcance. Alternativamente, el agua llueve en un cubo de 30 pies de lado dentro del alcance apagando cualquier llama expuesta dentro del área. ***Destruir Agua.*** Destruyes hasta 10 galones de agua limpia de un recipiente dentro del alcance. Alternativamente, deshaces la niebla en un cubo de 30 pies de lado dentro del alcance."
    },
    {
      name: "Creación",
      level: 5,
      school: "Ilusión",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "30 pies",
      duration: "Especial",
      description: "Utilizando hebras de sombras sacadas del Shadowfell creas un objeto inerte de material vegetal dentro del alcance: tela, cuerda, madera o similar. También puedes usar este conjuro para crear objetos hechos de materia inorgánica como piedra, cristal o metal. El objeto creado no puede ser mayor que un cubo de 5 pies de lado y tienes que haber visto antes tanto la forma como el material que lo compone. La duración depende del material del objeto. Si está compuesto de varios materiales, usa la duración más breve. | Material | Duración | |---|---| | Material vegetal | 1 día | | Cristal o piedra | 12 horas | | Metales preciosos | 1 hora | | Gemas | 10 minutos | | Adamantina o mithral | 1 minuto | Utilizar un material creado por este conjuro como componente material de otro conjuro hará que este último falle."
    },
    {
      name: "Curar Heridas",
      level: 1,
      school: "Evocación",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Paladín",
        "Explorador"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Una criatura a la que toques recupera tantos puntos de golpe como 1d8 + tu modificador por aptitud mágica. Este conjuro no tiene efecto en muertos vivientes o autómatas."
    },
    {
      name: "Luces danzantes",
      level: 0,
      school: "Evocación",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Creas hasta cuatro luces similares a la producida por una antorcha dentro del alcance, dándoles la apariencia de antorchas, linternas u orbes luminosos que levitan hasta el final de la duración del conjuro. También puedes combinar las cuatro luces para formar una luz de aspecto vagamente humanoide y de tamaño Mediano. En ambos casos, cada luz proyecta luz tenue en un radio de 10 pies. Como acción adicional puedes mover las luces hasta 60 pies a una nueva localización dentro del alcance. Cada luz debe estar a 20 pies o menos de otra luz creada por este conjuro y se desvanecerá si sale del alcance del mismo."
    },
    {
      name: "Oscuridad",
      level: 2,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Hasta el final de la duración del conjuro, una oscuridad mágica se propaga desde un punto a tu elección dentro del alcance y llena una esfera de 15 pies de radio. Esta oscuridad se extiende más allá de las esquinas. Una criatura con visión en la oscuridad no puede ver a través de ella y la luz no mágica no puede alumbrarla. Si el punto elegido es un objeto que tú sujetes o uno que nadie lleve o vista, la oscuridad se extenderá desde el objeto y se desplazará con él. Cubrir completamente la fuente de la oscuridad con un objeto opaco, como una cazuela o un casco, la bloquea. Si cualquier parte del área de este conjuro se superpone con una zona de luz creada por un conjuro de nivel 2 o inferior, el conjuro que creó esa luz es disipado."
    },
    {
      name: "Visión en la Oscuridad",
      level: 2,
      school: "Transmutación",
      classes: [
        "Druida",
        "Explorador",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "8 horas",
      description: "Tocas a una criatura dispuesta y le otorgas la habilidad de ver en la oscuridad. Durante la duración, esa criatura tiene visión en la oscuridad hasta un alcance de 60 pies."
    },
    {
      name: "Luz del día",
      level: 3,
      school: "Evocación",
      classes: [
        "Clérigo",
        "Druida",
        "Paladín",
        "Explorador",
        "Hechicero"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "1 hora",
      description: "Una esfera brillante ilumina una zona de 60 pies de radio alrededor de un punto dentro del alcance. La esfera emite luz brillante y proporciona luz tenue a otros 60 pies de distancia. Si el punto elegido es un objeto que tú sujetas o no lleva o viste nadie, la luz se extenderá desde el objeto y se desplazará con él. Cubrir completamente la fuente de luz con un objeto opaco, como una cazuela o un casco, la bloquea. Si cualquier parte del área de este conjuro se superpone con el área de oscuridad creada por un conjuro de nivel 3 o menos, el conjuro que creó esa oscuridad es disipado."
    },
    {
      name: "Guarda contra la muerte",
      level: 4,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Paladín"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "8 horas",
      description: "Tocas a una criatura para proporcionarle cierta protección contra la muerte. La primera vez que fuera a llegar a 0 puntos de golpe como resultado de recibir daño en vez de eso se queda con 1 punto de golpe y el conjuro termina. Si el conjuro todavía está activo cuando el objetivo fuera a ser objeto de un efecto que lo matara inmediatamente sin hacerle daño, el efecto queda negado y este conjuro termina."
    },
    {
      name: "Bola de Fuego de Explosión Retardada",
      level: 7,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "150 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Un rayo de luz amarilla se proyecta desde tu índice y se condensa quedando latente con la forma de una cuenta brillante en un punto dentro del alcance. Cuando el conjuro termina, ya sea porque se rompe tu concentración o porque decides terminarlo, la cuenta se transforma con un rugido sordo en una explosión ardiente que se extiende más allá de las esquinas. Todas las criaturas en una esfera de 20 pies centrada en el punto deben hacer una tirada de salvación de Destreza. Sufrirán daño de fuego igual al daño acumulado si fallan la tirada o la mitad del daño si la superan. El daño base del conjuro es 12d6. Si al final de tu turno la cuenta aún no ha explotado, este daño se incrementa en 1d6. Si se toca la cuenta antes de que termine el tiempo, la criatura que lo haga debe realizar una tirada de salvación de Destreza. Si falla, el conjuro termina inmediatamente, haciendo que la cuenta explote. Si tiene éxito, la criatura puede lanzar la cuenta hasta a 40 pies de distancia. Cuando esta golpee a una criatura u objeto sólido, el conjuro termina y la cuenta explota. El fuego daña los objetos que se encuentren en el área, haciendo arder los que sean inflamables y no lleve o vista alguien.",
      damage: "Nivel 7: 12d6, Nivel 8: 13d6, Nivel 9: 14d6"
    },
    {
      name: "Semiplano",
      level: 8,
      school: "Conjuración",
      classes: [
        "Brujo",
        "Hechicero"
      ],
      components: [
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "1 hora",
      description: "Creas una puerta de sombras en una superficie sólida y plana que puedas ver dentro del alcance. Esta puerta es suficientemente grande para permitir el paso sin trabas de criaturas Medianas. Cuando está abierta, la puerta lleva a un semiplano que parece una habitación vacía de 30 pies de lado en cada dimensión, hecha de madera o de piedra. Cuando el conjuro termina, la puerta desaparece y cualquier criatura u objeto dentro del semiplano permanece encerrado en él, al desaparecer la puerta en ambos lados. Cada vez que lanzas este conjuro, eres capaz de crear un semiplano nuevo o hacer que la puerta de sombras conecte con un semiplano que creaste en un lanzamiento anterior de este conjuro. Además, si conoces la naturaleza y contenidos de un semiplano creado mediante este conjuro por otra criatura, puedes hacer que la puerta de sombras conecte con ese semiplano."
    },
    {
      name: "Detectar el bien y el mal",
      level: 0,
      school: "Escuela no especificada",
      classes: [],
      components: [],
      castingTime: "No especificado",
      range: "No especificado",
      duration: "No especificado",
      description: "Hasta el final del conjuro sabes si hay aberraciones celestiales elementales feéricos demonios o muertos vivientes en un radio de 30 pies a tu alrededor así como su ubicación exacta. De forma similar percibes si hay un lugar u objeto a 30 pies de ti que haya sido consagrado o desecrado mágicamente. Este conjuro es capaz de atravesar la mayoría de las barreras pero se ve bloqueado por 1 pie de piedra 1 pulgada de cualquier metal común una fina lámina de plomo o 3 pies de madera o tierra."
    },
    {
      name: "Detectar Magia",
      level: 1,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Paladín",
        "Explorador",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 10 minutos",
      description: "Hasta que termine la duración del conjuro podrás percibir la presencia de magia a 30 pies o menos de ti. Si la detectas de esta manera, puedes usar tu acción para ver una débil aura alrededor de cualquier objeto o criatura visible que esté afectada por la magia y, además, podrás distinguir a qué escuela pertenece si es que pertenece a alguna. Este conjuro es capaz de atravesar la mayoría de las barreras, pero se ve bloqueado por 1 pie de piedra, 1 pulgada de cualquier metal común, una lámina fina de plomo o 3 pies de madera o tierra."
    },
    {
      name: "Detectar venenos y enfermedades",
      level: 1,
      school: "Adivinación",
      classes: [
        "Clérigo",
        "Druida",
        "Paladín",
        "Explorador"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 10 minutos",
      description: "Durante la duración, puedes percibir la presencia de venenos, criaturas venenosas y enfermedades en un radio de 30 pies a tu alrededor. Además, también puedes identificar el tipo de veneno, criatura venenosa o enfermedad en cada caso. Este conjuro es capaz de atravesar la mayoría de las barreras, pero se ve bloqueado por 1 pie de piedra, 1 pulgada de cualquier metal común, una fina lámina de plomo o 3 pies de madera o tierra."
    },
    {
      name: "Detectar Pensamientos",
      level: 2,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 minuto",
      description: "Durante la duración del conjuro, puedes leer los pensamientos de algunas criaturas. Al lanzar el conjuro y como acción en cada turno hasta que el conjuro termine, puedes concentrarte en una criatura que puedas ver a 30 pies o menos de ti. La criatura elegida no se verá afectada si tiene una Inteligencia de 3 o menos o no habla ningún idioma. Inicialmente conoces los pensamientos superficiales de la criatura, lo que más ocupe su mente en ese momento. Como acción, puedes concentrarte en los pensamientos de otra criatura o intentar sondear más profundamente en la mente de la misma criatura. Si optas por sondear más a fondo, el objetivo debe realizar una tirada de salvación de Sabiduría. Si falla, obtienes información sobre su razonamiento (si lo hay), su estado emocional, y algo que le preocupe notablemente (como algo que le preocupe, ame, o deteste). Si tiene éxito, el conjuro termina. En ambos casos, el objetivo es consciente de que estás indagando en su mente, y a menos que cambies el foco a otra criatura, puede usar su acción en su turno para hacer una tirada de Inteligencia contrarrestada por tu tirada de Inteligencia; si tiene éxito, el conjuro termina. Las preguntas verbales dirigidas a la criatura objetivo naturalmente moldean el curso de sus pensamientos, por lo que este conjuro resulta particularmente efectivo como parte de un interrogatorio. También puedes usar este conjuro para detectar la presencia de criaturas pensantes que no puedas ver. Al lanzar el conjuro o como acción durante su duración, puedes buscar pensamientos dentro de un radio de 30 pies a tu alrededor. El conjuro puede atravesar barreras, pero 2 pies de roca, 2 pulgadas de cualquier metal excepto plomo, o una fina lámina de plomo te bloquean. No puedes detectar una criatura con Inteligencia de 3 o menos o una que no hable ningún idioma. Una vez que detectas la presencia de una criatura de esta manera, puedes leer sus pensamientos por el resto de la duración del conjuro como se describió anteriormente, incluso si no puedes verla, pero aún debe estar dentro del rango."
    },
    {
      name: "Puerta Dimensional",
      level: 4,
      school: "Conjuración",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "500 pies",
      duration: "Instantáneo",
      description: "Te teletransportas de tu localización actual a cualquier otro punto dentro del alcance. Llegas de forma precisa al lugar elegido. Puede ser un lugar que veas, uno que puedas visualizar o uno que puedas describir mediante distancia y dirección, como \"200 pies directamente hacia abajo\" o \"hacia arriba y al noroeste en un ángulo de 45 grados, 300 pies.\" Eres capaz de llevar objetos contigo mientras su peso no supere tu capacidad de carga. También puedes llevar a una criatura voluntaria de tu tamaño o menor que lleve una cantidad de equipo que pueda cargar normalmente. Esa criatura debe estar a 5 pies de ti cuando lanzas el conjuro. Si llegaras a un lugar que ya estuviera ocupado por otra criatura, tú y cualquier criatura viajando contigo recibís 4d6 de daño de fuerza y el conjuro no consigue teletransportaros.",
      damage: "Nivel 4: 4d6"
    },
    {
      name: "Disfrazarse",
      level: 1,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "1 hora",
      description: "Haces que tú (incluyendo tu vestimenta, armadura, armas y otras posesiones que lleves contigo) parezcas diferente hasta que el conjuro finalice o utilices tu acción para terminarlo. Puedes parecer 1 pie más alto o más bajo y de complexión delgada, gorda o intermedia. No puedes cambiar el tipo de tu cuerpo, así que debes adoptar una forma que tenga la misma configuración de miembros. El resto de aspectos pueden ser afectados por la ilusión. Los cambios realizados por este conjuro no aguantan una inspección física. Por ejemplo, si usas este conjuro para añadir un sombrero a tu vestimenta, los objetos atraviesan el sombrero y cualquiera que lo toque no sentiría nada o sencillamente notaría tu pelo y cabeza. Si utilizas este conjuro para parecer más delgado, la mano de cualquiera que intente tocarte se chocará contigo en lo que parece ser espacio libre. Para darse cuenta de que estás disfrazado, una criatura puede emplear su acción en inspeccionar tu apariencia y debe tener éxito en una prueba de Inteligencia (Investigación) con CD igual a tu salvación de conjuros."
    },
    {
      name: "Desintegrar",
      level: 6,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Un fino rayo verde surge de tu dedo hacia un objetivo que puedas ver dentro del alcance. El objetivo puede ser una criatura, un objeto o una creación de fuerza mágica como el muro creado por muro de fuerza. Si el objetivo es una criatura debe hacer una tirada de salvación de Destreza. Si falla, recibe 10d6 + 40 de daño de fuerza. Si este ataque reduce los puntos de golpe del objetivo a 0, será desintegrado. Una criatura desintegrada y todo lo que vista o lleve, excepto objetos mágicos, quedan reducidos a un montoncito de polvo gris. La criatura solo puede ser devuelta a la vida mediante un conjuro de deseo o de resurrección verdadera. Este conjuro desintegra automáticamente un objeto no mágico o una creación de fuerza mágica de tamaño Grande o menor. Si el objetivo es un objeto o creación de fuerza mágica de tamaño Enorme o mayor, este conjuro desintegra una zona equivalente a un cubo de 10 pies de lado. Un objeto mágico no se ve afectado por este conjuro.",
      damage: "Nivel 6: 10d6 + 40"
    },
    {
      name: "Disipar el bien y el mal",
      level: 5,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Paladín"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración, hasta 1 minuto",
      description: "Una energía reluciente te rodea y te protege de criaturas feéricas, muertos vivientes y aquellos seres nativos de más allá del Plano Material. Hasta el final de la duración del conjuro, celestiales, elementales, feéricos, infernales y muertos vivientes tienen desventaja en las tiradas de ataque contra ti. Puedes terminar el conjuro antes de tiempo utilizando alguna de las siguientes funciones especiales. ***Romper encantamiento.*** Como acción, tocas a una criatura a tu alcance que esté hechizada, asustada o poseída por un celestial, elemental, feérico, infernal, o muerto viviente. La criatura que tocas ya no estará hechizada, asustada o poseída por dichas criaturas. ***Despido.*** Como acción, realiza un ataque de conjuro cuerpo a cuerpo contra un celestial, elemental, feérico, demonio o muerto viviente dentro de tu alcance. Si impactas intentas enviar a la criatura de vuelta a su plano natal. El objetivo debe tener éxito en una tirada de salvación de Carisma o será enviado a su plano natal (si no está ya allí). Si no están en su plano natal, los muertos vivientes son enviados al Shadowfell y los feéricos son enviados al Feywild."
    },
    {
      name: "Disipar Magia",
      level: 3,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Paladín",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Instantáneo",
      description: "Elige una criatura, objeto o efecto mágico dentro del alcance. Cualquier conjuro de nivel 3 o menor presente en el objetivo termina inmediatamente. Para cada conjuro de nivel 4 o más, realiza una prueba de característica usando tu aptitud mágica. La CD es 10 + el nivel del conjuro. Si tienes éxito en la tirada, el conjuro termina inmediatamente."
    },
    {
      name: "Adivinación",
      level: 4,
      school: "Adivinación",
      classes: [],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Tu magia y la ofrenda te ponen en contacto con un dios o sus sirvientes. Puedes hacer una sola pregunta sobre una meta, evento o actividad específica que ocurrirá en los próximos 7 días. El DM te dará una respuesta verdadera que puede ser una frase corta, una rima críptica o un augurio. Este conjuro no tiene en cuenta ninguna circunstancia que pueda alterar los resultados como por ejemplo el lanzamiento de otros conjuros o la pérdida de o encuentro con un compañero. Si se lanza dos veces o más antes del próximo descanso largo hay una posibilidad acumulativa del 25 % por cada lanzamiento después del primero de recibir un presagio aleatorio. El DM realiza esta tirada en secreto."
    },
    {
      name: "Favor Divino",
      level: 1,
      school: "Evocación",
      classes: [
        "Paladín"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción adicional",
      range: "Lanzador",
      duration: "Concentración, hasta 1 minuto",
      description: "Tu oración te fortalece con un resplandor divino. Hasta que el conjuro termine, tus ataques con arma infligen 1d4 de daño radiante adicional.",
      damage: "Nivel 1: 1d4"
    },
    {
      name: "Palabra Divina",
      level: 7,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción adicional",
      range: "30 pies",
      duration: "Instantáneo",
      description: "Pronuncias una palabra divina imbuida con el poder que formó el mundo en los albores de la creación. Elige a cualquier número de criaturas que puedas ver dentro del alcance. Cada una de estas criaturas que puedan oírte debe hacer una tirada de salvación de Carisma. Si fracasa sufre un efecto en función de sus puntos de golpe actuales: - 50 puntos de golpe o menos: ensordecida durante 1 minuto - 40 puntos de golpe o menos: ensordecida y cegada durante 10 minutos - 30 puntos de golpe o menos: ensordecida, cegada y aturdida durante 1 hora - 20 puntos de golpe o menos: muerte instantánea Independientemente de sus puntos de golpe actuales, un celestial, elemental, feérico o infernal que falle su tirada de salvación es forzado a regresar a su plano natal (si no está ya allí) y no puede volver al plano en que te hallas durante 24 horas a menos que use el conjuro deseo."
    },
    {
      name: "Dominar Bestia",
      level: 4,
      school: "Encantamiento",
      classes: [
        "Druida",
        "Hechicero"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Intentas encantar a una bestia que puedas ver dentro del alcance. La criatura debe superar una tirada de salvación de Sabiduría o quedará hechizada por ti hasta el final de la duración del conjuro. Tiene ventaja en esta tirada de salvación si tú o alguna criatura amistosa hacia ti estáis luchando contra ella. Mientras la bestia está hechizada posees un enlace telepático con ella siempre y cuando ambos os halléis en el mismo plano de existencia. Puedes usar este enlace para enviar órdenes a la criatura mientras estés consciente (no requiere acción) y esta hará todo lo que está en su poder para obedecer. Puedes especificar un procedimiento simple como \"ataca a esa criatura\", \"corre hasta allí\" o \"tráeme ese objeto\". Si la criatura cumple su orden y no recibe más mandatos de ti se defiende y protege en la medida de sus posibilidades. Puedes utilizar tu acción para tomar un control total y preciso de la bestia. Hasta el final de tu próximo turno, la criatura solo realizará las acciones que elijas y no hará nada que no le permitas. Durante este tiempo también podrás hacer que la bestia lleve a cabo reacciones pero eso hará que emplees también tu propia reacción. Cada vez que recibe daño la criatura hace una nueva tirada de salvación contra el conjuro. Si tiene éxito el efecto del conjuro termina."
    },
    {
      name: "Dominar Monstruo",
      level: 8,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración, hasta 1 hora",
      description: "Intentas encantar a una criatura que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría o quedará hechizado por ti hasta el final de la duración del conjuro. Tiene ventaja en esta tirada de salvación si tú o alguna criatura amistosa hacia ti estáis luchando contra él. Mientras la criatura está hechizada posees un enlace telepático con ella siempre y cuando ambos os halléis en el mismo plano de existencia. Puedes usar este enlace para enviar órdenes al objetivo mientras estés consciente (no requiere acción) y este hará todo lo que esté en su poder para obedecer. Puedes especificar un procedimiento simple como \"ataca a esa criatura\", \"corre hasta allí\" o \"tráeme ese objeto\". Si la criatura cumple su orden y no recibe más mandatos de ti se defiende y protege en la medida de sus posibilidades. Puedes utilizar tu acción para tomar un control total y preciso del objetivo. Hasta el final de tu próximo turno, la criatura solo realizará las acciones que elijas y no hará nada que no le permitas. Durante este tiempo también podrás hacer que el objetivo lleve a cabo reacciones pero eso hará que emplees también tu propia reacción. Cada vez que recibe daño, la criatura hace una nueva tirada de salvación contra el conjuro. Si tiene éxito, el efecto del conjuro termina."
    },
    {
      name: "Dominar Persona",
      level: 5,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Intentas encantar a un humanoide que puedas ver dentro del alcance. La criatura debe superar una tirada de salvación de Sabiduría o quedará hechizada por ti hasta el final de la duración del conjuro. Este tiene ventaja en la tirada de salvación si tú o alguna criatura amistosa hacia ti estáis luchando contra el objetivo. Mientras la criatura está hechizada posees un enlace telepático con ella siempre y cuando ambos os halléis en el mismo plano de existencia. Puedes usar este enlace para enviar órdenes al objetivo mientras estés consciente (no requiere acción) y este hará todo lo que esté en su poder para obedecer. Puedes especificar un procedimiento simple como \"ataca a esa criatura\", \"corre hasta allí\", o \"tráeme ese objeto\". Si la criatura cumple su orden y no recibe más mandatos de ti, se defiende y protege en la medida de sus posibilidades. Puedes utilizar tu acción para tomar un control total y preciso del objetivo. Hasta el final de tu próximo turno, la criatura solo realizará las acciones que elijas y no hará nada que no le permitas. Durante este tiempo también podrás hacer que el objetivo lleve a cabo reacciones pero eso hará que emplees también tu propia reacción. Cada vez que la criatura recibe daño, hace una nueva tirada de salvación contra el conjuro. Si tiene éxito, el efecto del conjuro termina."
    },
    {
      name: "Ensueño",
      level: 5,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Especial",
      duration: "8 horas",
      description: "Este conjuro da forma a los sueños de una criatura. Elige como objetivo de este conjuro a una criatura que conozcas. Esta criatura debe estar en tu mismo plano de existencia. Las criaturas que no duermen como los elfos no pueden ser contactadas por medio de este conjuro. A continuación, una criatura voluntaria que toques (o tú mismo) entra en un estado de trance, actuando de mensajero. Mientras está en trance, el mensajero es consciente de su entorno pero no puede realizar acciones o moverse. Si el objetivo está dormido, el mensajero aparecerá en los sueños del objetivo y podrá conversar con él mientras siga durmiendo, pero como máximo hasta el final de la duración del conjuro. El mensajero puede manipular el entorno del sueño, creando paisajes, objetos y otras imágenes. Además, es capaz de salir del trance en cualquier momento, terminando el efecto del conjuro. Por su parte, el objetivo recuerda el sueño con total claridad al levantarse. Si el objetivo está despierto cuando lanzas el conjuro, el mensajero lo percibe y puede salir del trance (terminando el conjuro) o esperar a que el objetivo se duerma, momento en el que aparece en sus sueños. Puedes hacer que el mensajero parezca monstruoso y terrorífico para el objetivo. Si haces esto, el mensajero puede entregar un mensaje de hasta diez palabras pero después el objetivo debe hacer una tirada de salvación de Sabiduría. Si falla, ecos de la monstruosidad fantasmal engendran una pesadilla que dura todo el tiempo de sueño restante del objetivo y le impide ganar beneficio alguno de su descanso. Además, cuando el objetivo despierte recibirá 3d6 de daño psíquico. Si posees alguna parte del cuerpo del objetivo como un mechón de cabello, una uña cortada o algo similar, este hace su tirada de salvación con desventaja.",
      damage: "Nivel 5: 3d6"
    },
    {
      name: "Artesanía druídica",
      level: 0,
      school: "Escuela no especificada",
      classes: [],
      components: [],
      castingTime: "No especificado",
      range: "No especificado",
      duration: "No especificado",
      description: "Susurrando a los espíritus de la naturaleza, creas uno de los siguientes efectos dentro del 'alcance': - Creas un pequeño efecto sensorial inofensivo que predice el clima en tu ubicación durante las próximas 24 horas. El efecto podría manifestarse como un orbe dorado para cielos despejados, una nube para lluvia, copos de nieve para la nieve, y así sucesivamente. Este efecto persiste durante 1 asalto. - Haces que una flor brote instantáneamente, una vaina de semillas se abra, o un capullo de hoja florezca. - Creas un efecto sensorial instantáneo e inofensivo, como hojas cayendo, un soplo de viento, el sonido de un pequeño animal, o el leve olor de mofeta. El efecto debe caber en un cubo de 5 pies. - Enciendes o apagas instantáneamente una vela, una antorcha, o una pequeña fogata."
    },
    {
      name: "Terremoto",
      level: 8,
      school: "Evocación",
      classes: [
        "Clérigo",
        "Druida",
        "Hechicero"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "500 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Creas un fenómeno sísmico en un punto del suelo que puedas ver dentro del alcance. Hasta el final de la duración del conjuro un intenso temblor arrasa el área en un radio de 100 pies alrededor del punto haciendo temblar a las criaturas y estructuras en la zona y en contacto con el suelo. El terreno en el área pasa a considerarse difícil. Todas las criaturas sobre él que estén concentrándose deberán hacer una tirada de salvación de Constitución. Si fallan su concentración se rompe. En el momento de lanzar el conjuro y al final de cada turno en el que sigas concentrándote en él, cada criatura sobre el suelo del área debe realizar una tirada de salvación de Destreza. Si falla, es derribada. Este conjuro puede tener efectos adicionales dependiendo del tipo de terreno en el área a determinar por el DM. Grietas. Al comienzo de tu siguiente turno después del lanzamiento del conjuro se abren varias grietas en el área. Un total de 1d6 fisuras aparecen en localizaciones elegidas por el DM. Cada una de ellas es de 1d10 x 10 pies de profundidad, 10 pies de ancho y se extiende de un borde del área al lado opuesto. Una criatura de pie en un punto donde se abra una fisura debe tener éxito en una tirada de salvación de Destreza o caerá dentro. Si tiene éxito, se desplaza al lado de la fisura mientras esta se abre. Una fisura que se abra justo debajo de una estructura provoca que esta se derrumbe automáticamente. Estructuras. El temblor hace 50 de daño contundente a cualquier estructura en contacto con el suelo del área cuando lanzas el conjuro y al principio de cada uno de tus turnos hasta que este termine. Si los puntos de golpe de una estructura se reducen a 0, esta se derrumba y puede dañar a las criaturas cercanas. Las criaturas que estén a una distancia menor o igual a la mitad de la altura de la estructura deben realizar una tirada de salvación de Destreza. En caso de fallar, la criatura recibe 5d6 de daño contundente, es derribada y queda enterrada bajo los escombros, requiriendo una prueba de DC 20 de Fuerza (Atletismo) como acción para escapar. El DM puede ajustar el DC más alto o más bajo, dependiendo de la naturaleza de los escombros. En caso de éxito, la criatura recibe la mitad de daño y no cae derribada ni queda enterrada bajo los escombros."
    },
    {
      name: "Descarga Sobrenatural",
      level: 0,
      school: "Evocación",
      classes: [
        "Brujo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Instantáneo",
      description: "Lanzas un rayo de energía chisporroteante hacia una criatura de tu elección dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, el objetivo recibe 1d10 de daño de fuerza. A niveles superiores, este conjuro crea dos rayos a nivel 5, tres rayos a nivel 11 y cuatro rayos a nivel 17. Puedes dirigir los rayos al mismo o a distintos objetivos. Haz una tirada de ataque separada para cada rayo."
    },
    {
      name: "Potenciar característica",
      level: 2,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Hechicero"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración hasta 1 hora",
      description: "Tocas a una criatura y le confieres una mejora de origen mágico. Elige uno de los siguientes efectos; el objetivo gana ese efecto hasta que el conjuro termine. Resistencia de oso. El objetivo tiene ventaja en pruebas de Constitución. También gana 2d6 puntos de golpe temporales que se pierden al acabar el conjuro. Fuerza de toro. El objetivo tiene ventaja en pruebas de Fuerza y su capacidad de carga se dobla. Agilidad de gato. El objetivo tiene ventaja en pruebas de Destreza. Además, si no está incapacitado, no recibe daño en caídas de 20 pies o menos. Esplendor de águila. El objetivo tiene ventaja en pruebas de Carisma. Astucia de zorro. El objetivo tiene ventaja en pruebas de Inteligencia. Sabiduría de búho. El objetivo tiene ventaja en pruebas de Sabiduría."
    },
    {
      name: "Agrandar/Reducir",
      level: 2,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Haces que una criatura u objeto que puedas ver dentro del alcance crezca o se reduzca hasta el final de la duración del conjuro. Elige una criatura o un objeto que nadie lleve o vista. Si el objetivo no es voluntario, puede hacer una tirada de salvación de Constitución. Si la supera, el conjuro no tiene efecto. Si el objetivo es una criatura, todo lo que vista y lleve cambia de tamaño con ella. Cualquier objeto que una criatura afectada deje caer vuelve a su tamaño normal inmediatamente. Agrandar. El tamaño del objetivo se duplica en todas las dimensiones y su peso se multiplica por ocho. El objetivo incrementa su tamaño en una categoría (de Mediano a Grande, por ejemplo). Si no hay sitio suficiente para que el objetivo duplique su tamaño, la criatura u objeto crece hasta el tamaño máximo posible en el espacio disponible. Hasta que el conjuro termine, el objetivo tiene ventaja en pruebas y tiradas de salvación de Fuerza. Las armas del objetivo también crecen para ajustarse a su nuevo tamaño. Mientras permanezcan así, los ataques del objetivo con ellas hacen 1d4 de daño adicionales. Reducir. El tamaño del objetivo se reduce a la mitad en todas las dimensiones y su peso se divide entre ocho. El objetivo disminuye su tamaño en una categoría (de Mediano a Pequeño, por ejemplo). Hasta que el conjuro termine, el objetivo tiene desventaja en pruebas y tiradas de salvación de Fuerza. Las armas del objetivo también decrecen para ajustarse a su nuevo tamaño. Mientras permanezcan así los ataques del objetivo con ellas hacen 1d4 de daño menos (esto no puede reducir el daño por debajo de 1)."
    },
    {
      name: "Enmarañar",
      level: 1,
      school: "Conjuración",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "90 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Raíces, vides y malas hierbas brotan del suelo intentando agarrar a las criaturas en un cuadrado de 20 pies de lado situado en un punto dentro del alcance. Hasta el final de la duración del conjuro estas plantas transforman el suelo del área en terreno difícil. Cualquier criatura que se encuentre en dicho espacio cuando lanzas el conjuro debe tener éxito en una tirada de salvación de Fuerza o quedará apresada por las plantas enredadoras hasta el final del conjuro. Una criatura apresada puede utilizar su acción para hacer una prueba de Fuerza con CD igual a tu salvación de conjuros. Si la supera, queda libre. Cuando el conjuro termina las plantas conjuradas se marchitan y se secan."
    },
    {
      name: "Enthrall",
      level: 2,
      school: "Enchantment",
      classes: [
        "Bard",
        "Warlock"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 action",
      range: "60 feet",
      duration: "1 minute",
      description: "You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a wisdom saving throw. Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak."
    },
    {
      name: "Excursión etérea",
      level: 7,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Clérigo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Hasta 8 horas",
      description: "Viajas a las regiones exteriores del Plano Etéreo en el área donde se superpone con tu plano actual. Permaneces en la Frontera Etérea hasta el final de la duración del conjuro o hasta que utilices tu acción para terminarlo. Mientras tanto puedes moverte en cualquier dirección. Si te desplazas hacia arriba o hacia abajo cada pie movido te cuesta 1 pie adicional. Mientras estés en el Plano Etéreo puedes ver y oír lo que ocurre en el plano del que vienes aunque lo percibes en tonos de gris y solo puedes ver a 60 pies de distancia. Únicamente puedes afectar y ser afectado por otras criaturas en el Plano Etéreo. Las criaturas que no están en él no pueden percibirte ni interactuar contigo a menos que algún tipo de magia o una habilidad especial se lo permita. Ignoras todos los objetos y efectos que no estén en el Plano Etéreo lo que te permite moverte a través de objetos en tu plano original que puedas percibir. Cuando el conjuro termina vuelves inmediatamente al plano del que viniste pero en el lugar en el que te encuentras actualmente. Si ocupas el mismo sitio que un objeto sólido o una criatura en ese momento serás desplazado al espacio desocupado más cercano y recibirás tanto daño de fuerza como el doble de los pies que hayas sido desplazado. Este conjuro no tiene efecto alguno si lo lanzas mientras estás en el Plano Etéreo o en un plano con el que no tenga frontera como uno de los Planos Exteriores."
    },
    {
      name: "Retirada Expeditiva",
      level: 1,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción adicional",
      range: "Lanzador",
      duration: "Concentración hasta 10 minutos",
      description: "Este conjuro te permite moverte a una velocidad increíble. Puedes realizar la acción de Correr cuando lanzas este conjuro y posteriormente como acción adicional en cada uno de tus turnos hasta el final del conjuro."
    },
    {
      name: "Mal de ojo",
      level: 6,
      school: "Nigromancia",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 minuto",
      description: "Hasta el final de la duración del conjuro tus ojos se convierten en un vacío oscuro imbuido de un poder terrible. Una criatura de tu elección que puedas ver a 60 pies de ti debe realizar una tirada de salvación de Sabiduría o verse afectada por uno de los siguientes efectos hasta que el conjuro termine. En cada uno de tus turnos hasta que el conjuro termine puedes usar tu acción para elegir como objetivo a otra criatura pero no podrás volver a dirigirlo contra una que haya superado una tirada de salvación contra este lanzamiento de mal de ojo. ***Sueño.*** El objetivo cae inconsciente. Se despierta si recibe algún daño o si otra criatura emplea su acción en despertarle. ***Pánica.*** El objetivo queda asustado por ti. En cada uno de sus turnos la criatura asustada debe utilizar la acción Correr para alejarse de ti por la ruta más corta y segura a menos que no haya dónde huir. Si el objetivo se mueve a un punto a 60 pies de ti o más y donde no pueda verte el efecto termina. ***Náuseas.*** El objetivo tiene desventaja en las tiradas de ataque y las pruebas de característica. Al final de cada uno de sus turnos puede realizar otra tirada de salvación de Sabiduría. Si tiene éxito, el efecto del conjuro termina."
    },
    {
      name: "Creación",
      level: 5,
      school: "Transmutación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M (un trocito del mismo material que forma el objeto que planeas crear)"
      ],
      castingTime: "1 minuto",
      range: "30 pies",
      duration: "Especial",
      description: "Utilizando hebras de sombra extraídas del Plano Umbrío, creas un objeto inerte de material vegetal dentro del alcance: tela, cuerda, madera o similar. También puedes usar este conjuro para crear objetos hechos de materia inorgánica como piedra, cristal o metal. El objeto creado no puede ser mayor que un cubo de 5 pies de lado y debes haber visto previamente tanto la forma como el material que lo compone. Escoge materias primas que puedas ver dentro del alcance. Puedes fabricar un objeto Grande o menor (contenido dentro de un cubo de 10 pies, o ocho cubos conectados de 5 pies), dado una cantidad suficiente de materia prima. Si trabajas con metal, piedra u otra sustancia mineral, sin embargo, el objeto fabricado no puede ser más grande que Mediano (contenido dentro de un solo cubo de 5 pies). La calidad de los objetos hechos por el conjuro es proporcional a la calidad de las materias primas. Las criaturas o los objetos mágicos no pueden ser creados o transmutados por este conjuro. Tampoco puedes usarlo para crear ítems que ordinariamente requieran un alto grado de artesanía, como joyería, armas, vidrio o armadura, a menos que tengas habilidad con el tipo de herramientas de artesano usadas para crear dichos objetos."
    },
    {
      name: "Fuego Feérico",
      level: 1,
      school: "Evocación",
      classes: [
        "Druida"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 minuto",
      description: "El conjuro ilumina con luz azul, verde o violeta (a tu elección) el contorno de todos los objetos en un cubo de 20 pies dentro del alcance. También se ilumina el contorno de cualquier criatura dentro del área que falle una tirada de salvación de Destreza. Hasta el final de la duración del conjuro, los objetos y criaturas afectados emiten luz tenue en un radio de 10 pies. Todas las tiradas de ataque contra una criatura u objeto afectado tienen ventaja si el atacante puede ver a su objetivo. Además, aunque sean invisibles no recibirán ninguno de los beneficios de ese estado mientras sigan afectados por fuego feérico."
    },
    {
      name: "Mastín Fiel de Mordenkainen",
      level: 4,
      school: "Conjuracion",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "8 horas",
      description: "Conjuras un perro guardián fantasmal en un espacio desocupado que puedas ver dentro del alcance donde permanece hasta el final de la duración del conjuro, hasta que finalices el conjuro usando una acción, o hasta que te alejes más de 100 pies de él. El mastín es invisible para todas las criaturas excepto para ti y no puede ser dañado. Cuando una criatura Pequeña o mayor llega a 30 pies de él sin haber dicho una contraseña que especificas al lanzar el conjuro, el mastín comienza a ladrar ruidosamente. El mastín puede ver criaturas invisibles e incluso ver en el Plano Etéreo. Puede ver a través de las ilusiones. Al principio de cada uno de tus turnos, el mastín intenta morder a una criatura que se encuentre a 5 pies de distancia o menos y sea hostil hacia ti. Su bonificador a la tirada de ataque es igual a tu modificador por aptitud mágica + tu bonificador por competencia. Si impacta, hace 4d8 de daño perforante.",
      damage: "Nivel 4: 4d8"
    },
    {
      name: "Falsa Vida",
      level: 1,
      school: "Nigromancia",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "1 hora",
      description: "Fortaleciéndote mediante una imitación nigromántica de vida, ganas 1d4 + 4 puntos de golpe temporales hasta el final de la duración del conjuro."
    },
    {
      name: "Terror",
      level: 3,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración, hasta 1 minuto",
      description: "Proyectas una visión fantasmal que encarna los peores miedos de tus enemigos. Cada criatura en un cono de 30 pies debe tener éxito en una tirada de salvación de Sabiduría o soltará lo que tenga agarrado y quedará asustada hasta el final de la duración del conjuro. Mientras una criatura esté asustada por este hechizo, en cada uno de sus turnos deberá usar la acción de Correr para alejarse de ti por la ruta más corta y segura posible, a menos que no tenga por dónde huir. Si la criatura termina su turno en un lugar donde no te tiene en su línea de visión, puede realizar otra tirada de salvación de Sabiduría. Si la supera, el conjuro termina para esa criatura."
    },
    {
      name: "Caída de Pluma",
      level: 1,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "M"
      ],
      castingTime: "1 reacción",
      range: "60 pies",
      duration: "1 minuto",
      description: "Elige un máximo de cinco criaturas dentro del alcance que estén cayendo. La velocidad de caída de cada objetivo se reduce a 60 pies por asalto hasta que el conjuro termine. Si alguna criatura llega al suelo antes de que esto suceda, no recibe daño por caída sino que puede caer de pie y el conjuro acaba para ese objetivo."
    },
    {
      name: "Romper la mente",
      level: 8,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Druida",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "150 pies",
      duration: "Instantáneo",
      description: "Atacas la mente de una criatura que puedas ver dentro del alcance, intentando destruir su intelecto y su personalidad. El objetivo recibe 4d6 de daño psíquico y debe hacer una tirada de salvación de Inteligencia. Si fracasa, la Inteligencia y el Carisma de la criatura pasan a ser 1. Tras esto, el objetivo no puede lanzar conjuros, activar objetos mágicos, comprender idiomas o comunicarse de forma inteligible. A pesar de ello, es capaz de identificar a sus amigos, seguirlos y defenderlos. Cada 30 días, la criatura puede repetir la tirada de salvación de este conjuro. Si tiene éxito, el efecto del conjuro termina. También se puede finalizar este conjuro usando restablecimiento mayor, curar o deseo.",
      damage: "Nivel 8: 4d6"
    },
    {
      name: "Conjurar Familiar",
      level: 1,
      school: "Conjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "10 pies",
      duration: "Instantáneo",
      description: "Obtienes los servicios de un familiar, un espíritu que adopta una forma animal de tu elección: araña, comadreja, búho, caballito de mar, cangrejo, cuervo, gato, halcón, lagarto, murciélago, pez (mordedor), pulpo, rana (sapo), rata o serpiente venenosa. Aparece en un espacio libre dentro del alcance y tiene el perfil de la forma elegida, aunque su tipo es celestial, feérico o infernal (a tu elección) en vez de bestia. Tu familiar actúa de forma independiente pero siempre obedece tus órdenes. En combate hace su propia tirada de iniciativa y actúa en su propio turno. Un familiar no puede atacar pero puede realizar otras acciones con normalidad. Si sus puntos de golpe se reducen a 0 desaparece sin dejar rastro físico alguno. Reaparecerá cuando lances este conjuro de nuevo. Mientras tu familiar esté a 100 pies de ti, puedes comunicarte con él telepáticamente. Además, puedes usar tu acción para ver a través de los ojos del familiar y oír lo que él oiga hasta el comienzo de tu próximo turno, ganando los beneficios de cualquier sentido especial que posea. Durante este tiempo permanecerás sordo y ciego respecto a tus propios sentidos. Puedes usar tu acción para desconvocar temporalmente a tu familiar. Se retira a una dimensión de bolsillo donde espera a ser convocado de nuevo. También puedes desconovarlo para siempre. Mientras se encuentre temporalmente desconvocado puedes usar una acción para hacer que reaparezca en un espacio desocupado a 30 pies o menos de ti. No puedes tener más de un familiar al mismo tiempo. Si lanzas este conjuro cuando ya tienes uno, haces que el actual adopte una forma nueva. Elígela de la lista anterior. Tu familiar se transforma en la criatura escogida. Por último, cuando lanzas un conjuro con un alcance de toque, puedes hacer que tu familiar sea el que toque a tu objetivo como si él hubiera lanzado el conjuro. Tu familiar debe permanecer a 100 pies o menos de ti y usar su reacción para tocar al objetivo cuando lanzas el conjuro. Si este requiere una tirada de ataque, utiliza tu modificador de ataque para la tirada."
    },
    {
      name: "Hallar Corcel",
      level: 2,
      school: "Conjuración",
      classes: [
        "Paladín"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "10 minutos",
      range: "30 pies",
      duration: "Instantáneo",
      description: "Invocas un espíritu que asume la forma de un corcel especialmente inteligente, fuerte y leal, creando un vínculo duradero con él. Aparece en un espacio libre dentro del alcance y toma una forma de tu elección entre las siguientes: un caballo de batalla, un poni, un camello, un alce o un mastín (tu DM puede permitir que otros animales sean invocados como corceles). Tiene el perfil de la forma elegida, aunque su tipo es celestial, feérico o infernal (a tu elección) en vez de bestia. Además, si tu corcel tiene Inteligencia 5 o menos, esta pasa a ser 6 y podrá entender un idioma de tu elección que hables. El corcel te sirve como montura tanto dentro como fuera del combate y tenéis un vínculo instintivo que os permite luchar como si fuerais uno. Mientras estés cabalgando sobre él, puedes elegir que cualquier conjuro que lances que te afecte solo a ti, afecte también a tu corcel. Si sus puntos de golpe se reducen a 0, desaparece sin dejar rastro físico alguno. Puedes desconvocarlo en cualquier momento como acción, haciendo que desaparezca. Sea cual sea el caso, lanzar este conjuro de nuevo invoca al mismo corcel, devolviéndole a sus puntos de golpe máximos. Mientras tu corcel esté a 1 milla de ti, puedes comunicarte con él telepáticamente. No puedes estar atado mediante este conjuro a más de un corcel a la vez."
    },
    {
      name: "Detectar Trampas",
      level: 0,
      school: "Escuela no especificada",
      classes: [],
      components: [],
      castingTime: "No especificado",
      range: "No especificado",
      duration: "No especificado",
      description: "Puedes sentir la presencia de cualquier trampa dentro del alcance que esté en tu línea de visión. En lo que a este conjuro respecta una trampa incluye cualquier objeto que fuera a causar un efecto súbito o inesperado que tú consideres dañino o indeseable y que fuera creado con ese propósito. Por tanto el conjuro detectará un área afectada por el conjuro alarma, un glifo custodio, o una trampa mecánica como un pozo, pero no revelará una zona endeble del suelo, un techo inestable, o un socavón oculto. Este conjuro simplemente alerta de la existencia de una trampa. No te transmite la localización de cada trampa, pero sí la índole general del peligro potencial."
    },
    {
      name: "Encontrar el Camino",
      level: 6,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Lanzador",
      duration: "Concentración hasta 1 día",
      description: "Este conjuro te permite buscar el camino más corto y directo a una localización fija y concreta del plano en el que te encuentras, con la que estés familiarizado. Si nombras un destino en otro plano de existencia, un destino que se mueva (como una fortaleza móvil), o un destino no específico (como 'la guarida de un dragón verde'), el conjuro falla. Hasta el final de la duración del conjuro y mientras te mantengas en el mismo plano de existencia que el destino, sabrás la distancia y dirección hacia él. Si mientras viajas hacia allí se te presenta una bifurcación, siempre sabrás cuál es el camino más corto y directo (pero no necesariamente el más seguro)."
    },
    {
      name: "Dedo de la Muerte",
      level: 7,
      school: "Nigromancia",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Emite energía negativa hacia una criatura que puedas ver dentro del alcance, atravesando su cuerpo y provocándole un dolor abrasador. El objetivo debe hacer una tirada de salvación de Constitución. Sufrirá 7d8 + 30 de daño necrótico si falla la tirada o la mitad del daño si la supera. Un humanoide muerto a causa de este conjuro se alza como zombi al comienzo de tu próximo turno bajo tu control de forma permanente. Intentará seguir tus órdenes verbales lo mejor que pueda.",
      damage: "Nivel 7: 7d8 + 30"
    },
    {
      name: "Dardo Ígneo",
      level: 0,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Instantáneo",
      description: "Lanzas una mota de fuego a una criatura u objeto dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si aciertas, el objetivo recibe 1d10 de daño por fuego. Un objeto inflamable impactado por este conjuro se enciende si no está siendo llevado o transportado. El daño de este hechizo aumenta en 1d10 cuando alcanzas el nivel 5 (2d10), nivel 11 (3d10), y nivel 17 (4d10)."
    },
    {
      name: "Escudo de Fuego",
      level: 4,
      school: "Evocación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "10 minutos",
      description: "Llamas delgadas y delicadas envuelven tu cuerpo hasta el final de la duración del conjuro emitiendo luz brillante en un radio de 10 pies y luz tenue 10 pies más allá. Puedes terminar el conjuro antes de tiempo si utilizas una acción para finalizarlo. Las llamas te proporcionan un escudo cálido o frío a tu elección. El escudo cálido te aporta resistencia al daño de frío mientras que el escudo frío te provee de resistencia al daño de fuego. Además cuando una criatura que se encuentre a 5 pies de ti te golpee con un ataque cuerpo a cuerpo el escudo estalla en llamas. El atacante recibe 2d8 de daño de fuego de un escudo cálido o 2d8 de daño de frío de un escudo frío.",
      damage: "Nivel 4: 2d8"
    },
    {
      name: "Tormenta de Fuego",
      level: 7,
      school: "Evocación",
      classes: [
        "Clérigo",
        "Druida",
        "Hechicero"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "150 pies",
      duration: "Instantáneo",
      description: "Una tormenta de llamas surge rugiendo en una zona de tu elección dentro del alcance. El área de la tormenta está formada por hasta diez cubos de 10 pies que puedes colocar como desees. Cada cubo debe tener al menos una cara adyacente a una cara de otro cubo. Cualquier criatura que esté en el área debe hacer una tirada de salvación de Destreza. Sufrirá 7dl0 de daño de fuego si falla la tirada o la mitad del daño si la supera. El fuego daña los objetos que se encuentren en el área haciendo arder los que sean inflamables y no lleve o vista alguien. Si así lo quieres la vida vegetal en el área no se verá afectada.",
      damage: "Nivel 7: 7d10"
    },
    {
      name: "Bola de Fuego",
      level: 3,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "150 pies",
      duration: "Instantáneo",
      description: "Una ráfaga brillante surge de tu dedo hacia un punto de tu elección dentro del alcance y después crece con un rugido sordo hasta convertirse en una explosión ardiente. Todas las criaturas en una esfera de 20 pies centrada en el punto deben hacer una tirada de salvación de Destreza. Sufrirán 8d6 de daño de fuego si fallan la tirada o la mitad del daño si la superan. El fuego se extiende más allá de las esquinas. Los objetos inflamables que se encuentren en el área que no lleve o vista alguien arderán.",
      damage: "Nivel 3: 8d6, Nivel 4: 9d6, Nivel 5: 10d6, Nivel 6: 11d6, Nivel 7: 12d6, Nivel 8: 13d6, Nivel 9: 14d6"
    },
    {
      name: "Espada Ígnea",
      level: 2,
      school: "Evocación",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción adicional",
      range: "Autolanzado",
      duration: "Concentración hasta 10 minutos",
      description: "Evocas una hoja ardiente en tu mano libre. Esta es similar en tamaño y forma a una cimitarra y permanece hasta el final de la duración del conjuro. Si sueltas la hoja desaparecerá pero puedes evocarla de nuevo como acción adicional. Puedes usar una acción para hacer un ataque de conjuro cuerpo a cuerpo con la hoja ardiente. Si impactas, el objetivo recibe 3d6 de daño de fuego. La cimitarra emite luz brillante en un radio de 10 pies y luz tenue 10 pies más allá.",
      damage: "Nivel 2: 3d6, Nivel 4: 4d6, Nivel 6: 5d6, Nivel 8: 6d6"
    },
    {
      name: "Golpe Flamígero",
      level: 5,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Una columna de fuego divino ruge desde el cielo y cae sobre una localización de tu elección. Todas las criaturas en un cilindro de 10 pies de radio y 40 pies de altura centrado en un punto dentro del alcance deben realizar una tirada de salvación de Destreza. Sufrirán 4d6 de daño de fuego y 4d6 de daño radiante si fallan la tirada, o la mitad del daño si la superan.",
      damage: "Nivel 5: 4d6 + 4d6, Nivel 6: 4d6 + 5d6, Nivel 7: 4d6 + 6d6, Nivel 8: 4d6 + 7d6, Nivel 9: 4d6 + 8d6"
    },
    {
      name: "Esfera de llamas",
      level: 2,
      school: "Conjuración",
      classes: [
        "Druida",
        "Hechicero"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Una esfera de fuego de 5 pies de diámetro aparece en un espacio libre a tu elección dentro del alcance y se mantiene hasta el final de la duración del conjuro. Cualquier criatura que acabe su turno a 5 pies o menos de la esfera debe hacer una tirada de salvación de Destreza. Sufrirá 2d6 de daño de fuego si falla la tirada o la mitad del daño si la supera. Como acción adicional, puedes mover la esfera hasta 30 pies a una nueva localización dentro del alcance. Si embistes con la esfera a una criatura, esta debe hacer la tirada de salvación contra el daño de la esfera que ya no podrá moverse más durante este turno. Cuando desplazas la esfera, puedes moverla por encima de barreras de hasta 5 pies de alto y hacer que salte hoyos de hasta 10 pies de ancho. Además, la esfera prende cualquier objeto inflamable que no vista o lleve alguien y emite luz brillante en un radio de 20 pies y luz tenue en un radio de 20 pies más.",
      damage: "Nivel 2: 2d6, Nivel 3: 3d6, Nivel 4: 4d6, Nivel 5: 5d6, Nivel 6: 6d6, Nivel 7: 7d6, Nivel 8: 8d6, Nivel 9: 9d6"
    },
    {
      name: "De la carne a la piedra",
      level: 6,
      school: "Transmutación",
      classes: [
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Intentas convertir en piedra a una criatura que puedas ver dentro del alcance. Si su cuerpo está hecho de carne, debe hacer una tirada de salvación de Constitución. Si fracasa, queda apresada mientras su carne comienza a endurecerse. Si tiene éxito, no se ve afectada. Una criatura apresada por este conjuro realiza otra tirada de salvación de Constitución al final de cada uno de sus turnos. El conjuro termina si la criatura tiene éxito tres veces en esta tirada. Si fracasa tres veces, queda convertida en piedra y por tanto bajo el estado 'petrificado' hasta el final de la duración del conjuro. Los éxitos y fallos no tienen por qué ser consecutivos. Lleva la cuenta de ambos hasta que tengas tres del mismo tipo. Si se rompe físicamente a la criatura mientras está petrificada, sufrirá deformaciones análogas en su cuerpo cuando vuelva a su estado original. Si mantienes tu concentración en este conjuro durante toda la duración posible, la criatura se convertirá en piedra hasta que el efecto sea anulado."
    },
    {
      name: "Disco Flotante de Tenser",
      level: 1,
      school: "Conjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "1 hora",
      description: "Este conjuro crea un plano circular y horizontal de fuerza de 3 pies de diámetro y 1 pulgada de espesor que flota a 3 pies del suelo en un espacio desocupado de tu elección que puedas ver dentro del alcance. El disco permanece hasta el final de la duración del conjuro y puede cargar hasta 500 libras. Si se pone más peso encima, el conjuro termina y todo lo que hubiera en el disco cae al suelo. El disco permanecerá inmóvil mientras estés a 20 pies o menos de él. Si te alejas más de 20 pies, te seguirá para mantenerse a esa distancia. Puede moverse sobre terreno desigual, subir o bajar escaleras, cuestas y similares, pero no puede cruzar un cambio de elevación de 10 o más pies. Por ejemplo, el disco no puede moverse a través de un pozo de 10 pies de profundidad, ni podrá salir de dicho pozo si es creado en el fondo. Si te alejas a más de 100 pies del disco (normalmente porque no puede rodear un obstáculo para seguirte), el conjuro termina."
    },
    {
      name: "Fly",
      level: 3,
      school: "Transmutation",
      classes: [
        "Sorcerer",
        "Warlock",
        "Wizard"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 action",
      range: "Touch",
      duration: "Up to 10 minutes",
      description: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall."
    },
    {
      name: "Nube de Oscurecimiento",
      level: 1,
      school: "Conjuración",
      classes: [
        "Druida",
        "Explorador",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Hasta 1 hora",
      description: "Creas una bruma que cubre un área esférica de 20 pies de radio alrededor de un punto de tu elección. La niebla se extiende más allá de las esquinas y el área se considera muy oscura. Se mantiene hasta el final de la duración del conjuro o hasta que un viento de velocidad moderada (al menos 10 millas por hora) la disperse."
    },
    {
      name: "Prohibición",
      level: 6,
      school: "Abjuración",
      classes: [
        "Clérico"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "Toque",
      duration: "1 día",
      description: "Creas una guarda contra el desplazamiento mágico que protege hasta 40,000 pies cuadrados de terreno y hasta una altura de 30 pies sobre el nivel del suelo. Hasta el final de la duración del conjuro, ninguna criatura puede teletransportarse dentro del área o utilizar portales, como los creados por el conjuro portal, para entrar en el área. El conjuro impermeabiliza el área contra el viaje interplanar y, por tanto, evita que las criaturas accedan al área mediante el Plano Astral, el Plano Etéreo, el Feywild, el Shadowfell o el conjuro desplazamiento entre planos. Además, este conjuro daña a las criaturas del tipo o tipos elegidos en el momento del lanzamiento. Escoge uno o más de los siguientes: celestial, elemental, feérico, infernal o muerto viviente. Las criaturas del tipo o tipos elegidos reciben 5d10 de daño radiante o necrótico (a tu elección) si comienzan su turno en el área del conjuro o cuando entran por primera vez. Cuando lanzas este conjuro, puedes crear una palabra de paso. Cualquier criatura que diga esta palabra de paso según accede al área no recibe daño del conjuro. El área del conjuro no se puede superponer con el área de otro conjuro de prohibición. Si lanzas prohibición cada día durante 30 días en el mismo lugar, el conjuro permanecerá hasta que sea disipado, pero los componentes materiales serán consumidos como parte del lanzamiento final."
    },
    {
      name: "Jaula de Fuerza",
      level: 7,
      school: "Evocación",
      classes: [
        "Bardo",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "100 pies",
      duration: "1 hora",
      description: "Creas una prisión invisible e inmóvil en forma de cubo y compuesta de fuerza mágica alrededor de un área de tu elección dentro del alcance. Puede ser una jaula o una caja de paredes sólidas, lo que prefieras. Si eliges la forma de jaula, puede tener hasta 20 pies de lado y estará formada por barras de 1/2 pulgada de diámetro separadas 1/2 pulgada. La forma de caja puede tener hasta 10 pies de lado y crea una barrera sólida que impide el paso de cualquier material y bloquea el lanzamiento de conjuros hacia dentro o fuera del área. Cualquier criatura completamente dentro del área cuando realizas el lanzamiento del conjuro queda atrapada. Aquellas que solo estén parcialmente dentro del área o sean demasiado grandes para caber dentro son empujadas hasta que quedan completamente fuera del área. Una criatura dentro de la jaula no puede salir mediante medios no mágicos. Si intenta usar la teletransportación o el viaje interplanar para abandonar la jaula, primero debe realizar una tirada de salvación de Carisma. Si tiene éxito, la criatura puede usar la magia para salir. Si fracasa, la criatura no es capaz de salir y malgasta el conjuro que haya lanzado. La jaula también se extiende al Plano Etéreo, bloqueando los viajes etéreos. Este conjuro no puede ser disipado mediante disipar magia."
    },
    {
      name: "Presagio",
      level: 9,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Druida",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Toque",
      duration: "8 horas",
      description: "Tocas a una criatura voluntaria a la que otorgas una habilidad limitada para ver el futuro inmediato. Hasta el final de la duración del conjuro, el objetivo no puede ser sorprendido y tiene ventaja en tiradas de ataque, pruebas de característica y tiradas de salvación. Además, las otras criaturas tienen desventaja en tiradas de ataque contra el objetivo. El conjuro termina inmediatamente si lo lanzas de nuevo antes de que termine su duración."
    },
    {
      name: "Libertad de Movimiento",
      level: 4,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "1 hora",
      description: "Tocas a una criatura voluntaria. Hasta el final de la duración del conjuro, el movimiento del objetivo no se ve afectado por el terreno difícil y los conjuros u otros efectos mágicos no pueden reducir su velocidad ni hacer que quede paralizado o apresado. El objetivo también puede utilizar 5 pies de su movimiento para salir automáticamente de ataduras no mágicas, como unas esposas o una criatura que está apresándole. Por último, estar bajo el agua no impone penalizaciones de movimiento o ataque en el objetivo."
    },
    {
      name: "Esfera Congelante de Otiluke",
      level: 6,
      school: "Evocación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "300 pies",
      duration: "Instantáneo",
      description: "Un globo frígido de energía glacial brota de tus dedos hacia un punto de tu elección dentro del alcance donde explota en un área esférica de 60 pies de radio. Cada criatura en la zona debe hacer una tirada de salvación de Constitución. Si falla sufrirá 10d6 de daño de frío. Si tiene éxito recibirá la mitad de daño. Si el globo golpea una masa de agua o un líquido que sea sobre todo agua (pero no a criaturas hechas principalmente de agua) lo congelará hasta una profundidad de 6 pulgadas en un área cuadrada de 30 pies de lado. El hielo dura 1 minuto y las criaturas que estuvieran nadando en la superficie del agua congelada quedan atrapadas en él. Una criatura atrapada puede utilizar su acción para liberarse si supera una prueba de Fuerza con CD igual a tu salvación de conjuros. Puedes no arrojar el orbe al completar el lanzamiento del conjuro. En este caso un pequeño globo del tamaño de una piedra de honda frío al tacto aparece en tu mano. En cualquier momento tú o una criatura a la que entregues el globo puede lanzarlo con la mano (hasta a 40 pies de distancia) o con una honda (hasta el alcance normal de la honda). Se hará añicos al hacer impacto, con el mismo efecto que lanzar el conjuro de forma normal. También puedes depositar el globo en el suelo sin que estalle. Después de 1 minuto si todavía no lo ha hecho explotará.",
      damage: "Nivel 6: 10d6"
    },
    {
      name: "Forma Gaseosa",
      level: 3,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración hasta 1 hora",
      description: "Transformas en una fina niebla a una criatura voluntaria a la que toques, incluyendo todo el equipo que vista o porte hasta el final de la duración del conjuro. El conjuro termina si sus puntos de golpe se reducen a 0. Las criaturas incorpóreas no se ven afectadas por la transformación. Mientras mantenga esta forma, el único método de movimiento del objetivo es una velocidad volando de 10 pies. Además, podrá entrar en el espacio de otra criatura y ocuparlo. El objetivo tiene resistencia al daño no mágico y ventaja en tiradas de salvación de Fuerza, Destreza y Constitución. También podrá pasar a través de agujeros pequeños, aberturas estrechas o incluso grietas, pero los líquidos le bloquearán el paso como si fueran superficies sólidas. El objetivo no puede caer y se mantendrá levitando incluso aunque sea aturdido o incapacitado. Mientras mantenga la forma de niebla, la criatura no podrá hablar o manipular objetos, ni tampoco dejarlos caer o utilizarlos, incluso aunque los llevara encima. Además, no podrá atacar o lanzar conjuros."
    },
    {
      name: "Portal",
      level: 9,
      school: "Conjuración",
      classes: [
        "Clérigo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Conjuras un portal que enlaza un espacio desocupado que puedas ver dentro del alcance con una localización precisa en otro plano de existencia. El portal es una apertura circular de entre 5 y 20 pies a tu elección. Puedes orientar el portal en la dirección que desees y se mantendrá hasta el fin de la duración del conjuro. El portal tiene un anverso y un reverso en cada plano que conecta. Viajar solo es posible moviéndose a través del anverso. Cualquier cosa que lo haga es transportada instantáneamente al otro plano apareciendo en el espacio desocupado más cercano al portal. Deidades y otros gobernantes de los planos pueden evitar que se abran los portales creados por este conjuro en su presencia o en cualquier parte de sus dominios. Cuando lanzas este conjuro puedes decir el nombre de una criatura específica (un pseudónimo título o apodo no es suficiente). Si esa criatura está en un plano diferente al tuyo, el portal se abrirá al lado de ella y la transportará a tu plano, dejándola en el espacio desocupado más cercano al portal. No obtienes ningún poder especial sobre la criatura y es libre de actuar como el DM considere apropiado. Puede irse, atacarte o ayudarte."
    },
    {
      name: "Geas",
      level: 5,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Paladín",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 minuto",
      range: "60 pies",
      duration: "30 días",
      description: "Impones una orden mágica a una criatura que puedas ver dentro del alcance obligándola a llevar a término una misión o impidiéndole realizar una acción o actividad según desees. El objetivo debe superar una tirada de salvación de Sabiduría o quedará hechizado por ti hasta el final de la duración del conjuro. Mientras permanezca hechizado sufrirá 5d10 de daño psíquico cada vez que actúe de manera contraria a tus instrucciones con un límite de una vez al día. Una criatura que no pueda comprenderte no se verá afectada por el conjuro. Puedes dar la orden que quieras al objetivo mientras no sea una actividad que lleve a una muerte segura. Si la instrucción es suicida, el conjuro termina inmediatamente. También puedes terminar el conjuro antes de tiempo si utilizas una acción para finalizarlo. Un conjuro de levantar maldición, restablecimiento mayor o deseo también lo da por terminado."
    },
    {
      name: "Dulce Descanso",
      level: 2,
      school: "Nigromancia",
      classes: [
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "10 días",
      description: "Tocas un cadáver u otro tipo de restos mortales. Hasta el final de la duración del conjuro, el objetivo queda protegido de la descomposición y no podrá convertirse en muerto viviente. Los días pasados bajo la influencia de este conjuro no cuentan respecto al límite máximo para poder traer al objetivo de entre los muertos, con lo que el efecto extiende el límite de tiempo de conjuros como levantar a los muertos."
    },
    {
      name: "Insecto Gigante",
      level: 4,
      school: "Transmutación",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración, hasta 10 minutos",
      description: "Transformas hasta diez ciempiés, tres arañas, cinco avispas, o un escorpión dentro del alcance en versiones gigantes de sus formas naturales hasta el final de la duración del conjuro. Un ciempiés se convierte en un ciempiés gigante, una araña en una araña gigante, una avispa en una avispa gigante y un escorpión en un escorpión gigante. Todas las criaturas obedecen tus órdenes verbales y en combate, actúan en tu turno en cada asalto. El DJ tiene los perfiles de estas criaturas y resuelve sus acciones y movimientos. Las criaturas siguen siendo sus versiones gigantes hasta el final de la duración del conjuro, hasta que lleguen a 0 puntos de vida, o hasta que utilices una acción para terminar el efecto. El DJ podría permitirte elegir objetivos distintos. Por ejemplo, si transformas a una abeja, su versión gigante puede tener el mismo perfil que una avispa gigante."
    },
    {
      name: "Labia",
      level: 8,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Brujo"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "1 hora",
      description: "Hasta que el conjuro termine, cada vez que hagas una prueba de Carisma, puedes cambiar el resultado de la tirada por un 15. Además, independientemente de si lo que dices es cierto, cualquier magia que determine si dices la verdad indica que estás siendo sincero."
    },
    {
      name: "Globo de Invulnerabilidad",
      level: 6,
      school: "Abjuración",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 minuto",
      description: "Una barrera inmóvil y de débil brillo surge en un radio de 10 pies alrededor de ti y permanece hasta el final de la duración del conjuro. Cualquier conjuro de nivel 5 o inferior que sea lanzado desde fuera de la barrera no puede afectar a las criaturas y objetos dentro de la misma, incluso si el conjuro se lanza utilizando un espacio de conjuro superior. Estos conjuros pueden elegir como objetivo a criaturas y objetos dentro de la barrera pero no tienen efecto en ellos. De forma similar, el área dentro de la barrera queda excluida de las zonas afectadas por esos conjuros."
    },
    {
      name: "Glifo Custodio",
      level: 3,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "Toque",
      duration: "Hasta que sea disipado o activado",
      description: "Cuando lanzas este conjuro inscribes un glifo que liberará posteriormente un efecto mágico. Puedes hacerlo en una superficie (como una mesa o una sección de un muro o suelo) o dentro de un objeto que pueda cerrarse (como un libro, pergamino o cofre del tesoro) para así esconder el glifo. Este puede cubrir una zona de hasta 10 pies de diámetro. Si la superficie o el objeto es alejado más de 10 pies del punto donde lanzaste el conjuro, este termina sin activarse y el glifo queda roto. El glifo es casi invisible y es necesario tener éxito en una prueba de Inteligencia (Investigación) con CD igual a tu salvación de conjuros para encontrarlo. Decides qué activa el glifo cuando lanzas el conjuro. Para glifos inscritos en una superficie, las activaciones más típicas incluyen tocar o pisar el glifo, retirar un objeto que lo cubría, acercarse a una cierta distancia del glifo, o manipular el objeto donde está inscrito. Para glifos inscritos en un objeto, las activaciones más comunes incluyen abrir el objeto, acercarse a una cierta distancia de él, o ver o leer el glifo. Una vez que este es activado, el conjuro termina. Puedes precisar aún más las condiciones de activación para que el conjuro solo se active bajo ciertas circunstancias o de acuerdo a unas características físicas concretas (como la altura o el peso), tipo de criatura (por ejemplo, que únicamente afecte a aberraciones o drows), o alineamiento. También puedes crear ciertas condiciones para que algunas criaturas no activen el glifo, como diciendo una palabra clave. Cuando inscribas el glifo, elige entre runas explosivas o glifo de conjuro. Runas explosivas. Cuando se activa el glifo, esta llena con energía mágica en una esfera de 20 pies de radio alrededor del mismo. La esfera se extiende más allá de las esquinas. Todas las criaturas en el área deben hacer una tirada de salvación de Destreza. Cada criatura recibe 5d8 de daño de ácido, frío, fuego, relámpago o trueno (a tu elección al crear el glifo) si falla la tirada, o la mitad si la supera. Glifo de conjuro. Puedes guardar un conjuro preparado de nivel 3 o menos en el glifo, lanzándolo como parte de la creación de este. El conjuro debe elegir como objetivo a una sola persona o una zona y no tiene efecto en el momento de lanzarlo, sino que cuando se activa el glifo, se lanza el conjuro guardado. Si el conjuro tiene un objetivo, este será la criatura que activó el glifo. Si el conjuro afecta a una zona, la zona queda centrada en la criatura. Si el conjuro convoca criaturas hostiles o crear objetos o trampas dañinos, estos aparecen lo más cerca posible del intruso y lo atacan. Si el conjuro requiere concentración, dura hasta el final de su duración completa."
    },
    {
      name: "Buenas bayas",
      level: 1,
      school: "Transmutación",
      classes: [
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Aparecen en tu mano un máximo de diez bayas infundidas con magia hasta el final de la duración del conjuro. Una criatura puede utilizar su acción para comerse una baya. Si hace esto recuperará 1 punto de golpe y tendrá sustento para todo el día. Las bayas pierden su poder si no son consumidas dentro de las 24 horas siguientes al lanzamiento del conjuro."
    },
    {
      name: "Grasa",
      level: 1,
      school: "Conjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "1 minuto",
      description: "Una grasa resbaladiza cubre el suelo en un cuadrado de 10 pies centrado en un punto dentro del alcance convirtiéndolo en terreno difícil hasta el final de la duración del conjuro. Cuando la grasa aparece todas las criaturas de pie en la zona afectada deben tener éxito en una tirada de salvación de Destreza o quedarán derribadas. Una criatura que entre en la zona o acabe su turno en ella también debe tener éxito en una tirada de salvación de Destreza o quedará derribada."
    },
    {
      name: "Invisibilidad mejorada",
      level: 4,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración hasta 1 minuto",
      description: "Una criatura a la que toques (que puedes ser tú mismo) se vuelve invisible hasta el final del conjuro. Cualquier cosa que el objetivo vista o lleve consigo será invisible mientras siga llevándola encima."
    },
    {
      name: "Restablecimiento mayor",
      level: 5,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Imbuyes de energía positiva a una criatura a la que toques deshaciendo un efecto debilitador anterior. Puedes reducir el nivel de cansancio en uno o terminar uno de los siguientes efectos en el objetivo: - Un efecto que le mantuviera hechizado o petrificado. - Una maldición, incluyendo la sintonización del objetivo a un objeto mágico maldito. - Una reducción de una de sus puntuaciones de característica. - Un efecto que reduzca sus puntos de golpe máximos."
    },
    {
      name: "Guardián de la Fe",
      level: 4,
      school: "Conjuración",
      classes: [
        "Clérigo",
        "Paladín"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "8 horas",
      description: "Convocas a un guardián espectral Grande que aparece en un espacio libre de tu elección que puedas ver dentro del alcance y levita en él hasta el final de la duración del conjuro. El guardián que ocupa este espacio se ve borroso excepto por una espada resplandeciente y un escudo adornado con el símbolo de tu deidad. Cualquier criatura hostil hacia ti que entre en un espacio a 10 pies del guardián por primera vez en un turno debe realizar una tirada de salvación de Destreza. Sufrirá 20 de daño radiante si falla la tirada o la mitad del daño si la supera. El guardián se desvanecerá cuando haya infligido un total de 60 de daño radiante.",
      damage: "Nivel 4: 20"
    },
    {
      name: "Guardas y guardias",
      level: 6,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "Toque",
      duration: "24 horas",
      description: "Creas una guarda que protege hasta 2.500 pies cuadrados de suelo (una zona cuadrada de 50 pies de lado, cien cuadrados de 5 pies de lado o 25 cuadrados de 10 pies de lado). La zona protegida puede tener hasta 20 pies de altura y la forma que desees. Puedes guardar varios pisos de una fortaleza dividiendo el área de la zona entre ellos, siempre y cuando puedas caminar a cada área contigua mientras estás lanzando el conjuro. Cuando lo lances, puedes especificar criaturas individuales que no se verán afectadas por alguno o ninguno de los efectos elegidos. También puedes elegir una palabra clave que, dicha en voz alta, hace al que la dice inmune a estos efectos. Guardas y guardias crea los siguientes efectos dentro de la zona protegida: ***Pasillos.*** La niebla llena todos los pasillos protegidos, haciéndolos muy oscuros. Además, en cada intersección o ramificación que ofrezca una elección entre caminos, hay un 50 % de posibilidades de que una criatura que no seas tú crea que está yendo en dirección contraria a la que eligió. ***Puertas.*** Todas las puertas en la zona protegida están cerradas mágicamente como si estuvieran selladas por el conjuro cerradura arcana. Además, puedes tapar hasta diez puertas con una ilusión (equivalente a la función de imagen ilusoria del conjuro ilusión menor) para que parezcan una parte normal de las paredes. ***Escaleras.*** Todas las escaleras en la zona protegida se llenan de telarañas como en el conjuro telaraña. Mientras guardas y guardias siga activo, las telas vuelven a crecer en 10 minutos si alguien las quema o arranca. ***Otros efectos de conjuro.*** Puedes elegir uno de los siguientes efectos mágicos y aplicarlo en la zona protegida de la fortaleza: - Sitúa luces danzantes en cuatro corredores. Puedes designar un patrón simple que las luces repetirán mientras guardas y guardias siga activo. - Sitúa boca mágica en dos localizaciones. - Sitúa nube apestosa en dos localizaciones. Los vapores surgen en los sitios elegidos; mientras guardas y guardias siga activo volverán en 10 minutos si son dispersados por el viento. - Sitúa una ráfaga de viento constante en una habitación o pasillo. - Sitúa una sugestión en una localización. Eliges una zona cuadrada de hasta 5 pies de lado y cualquier criatura que entre o pase a través del área recibe la sugestión mentalmente. Toda la zona protegida radia magia. Lanzar con éxito el conjuro disipar magia sobre un efecto concreto solo anula ese efecto. Puedes crear una estructura con guardas y guardias permanente si lanzas este conjuro en ella todos los días durante un año."
    },
    {
      name: "Guía",
      level: 0,
      school: "Adivinación",
      classes: [
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Hasta 1 minuto",
      description: "Tocas a una criatura dispuesta. Una vez antes de que el conjuro termine, el objetivo puede tirar un d4 y sumar el número tirado a una prueba de habilidad a su elección. Puede tirar el dado antes o después de realizar la prueba de habilidad. Entonces el conjuro termina."
    },
    {
      name: "Saeta guía",
      level: 1,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "1 asalto",
      description: "Lanzas un rayo de luz hacia una criatura de tu elección dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas la criatura recibe 4d6 de daño radiante. Además, la siguiente tirada de ataque contra el objetivo tiene ventaja si se realiza antes del final de tu siguiente turno, gracias a la tenue luz mística que lo iluminará hasta ese momento.",
      damage: "Nivel 1: 4d6, Nivel 2: 5d6, Nivel 3: 6d6, Nivel 4: 7d6, Nivel 5: 8d6, Nivel 6: 9d6, Nivel 7: 10d6, Nivel 8: 11d6, Nivel 9: 12d6"
    },
    {
      name: "Ráfaga de Viento",
      level: 2,
      school: "Evocación",
      classes: [
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador (línea recta de 60 pies)",
      duration: "Concentración hasta 1 minuto",
      description: "Una corriente de viento que forma una línea recta de 60 pies de largo y 10 pies de ancho surge de ti en una dirección de tu elección y permanece hasta el final de la duración del conjuro. Cada criatura que comience su turno en la corriente debe tener éxito en una tirada de salvación de Fuerza o será empujada 15 pies alejándose de ti en la dirección de la corriente. Cualquier criatura en la línea de viento que quiera acercarse a ti debe emplear 2 pies de movimiento por cada pie que quiera mover. La ráfaga dispersa gases o vapores y apaga velas, antorchas y otras llamas desprotegidas en la zona. Hace que las que estén protegidas, como la de una lámpara, se agiten violentamente y tiene un 50 % de posibilidades de apagarlas también. Hasta el final del conjuro, puedes usar una acción adicional en cada uno de tus turnos para cambiar la dirección en la que la corriente surge de ti."
    },
    {
      name: "Consagrar",
      level: 5,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "24 horas",
      range: "Toque",
      duration: "Hasta que sea disipado",
      description: "Tocas un punto e infundes la zona que lo rodea con poder sagrado (o impío). El área afectada puede tener un radio de hasta 60 pies y el conjuro falla si el radio incluye una zona que ya está bajo el efecto del conjuro consagrar. La zona afectada queda sujeta a los siguientes efectos. Primero, los celestiales, elementales, feéricos, infernales y muertos vivientes no pueden entrar en la zona, ni hechizar, asustar o poseer a criaturas que estén dentro de ella. Cualquier criatura hechizada, asustada o poseída por tales criaturas deja de estarlo al entrar en la zona. Puedes excluir a uno o más de estos tipos de criaturas de este efecto. Segundo, puedes asociar un efecto adicional a la zona. Elígelo de la siguiente lista o escoge uno ofrecido por el DM. Algunos de estos efectos se aplican a criaturas en la zona; puedes elegir si el efecto se aplica a todas las criaturas, a aquellas que sigan a una deidad o líder específico, o a criaturas de un tipo determinado como orcos o trolls. Cuando una criatura que fuera a ser afectada entre en la zona del conjuro por primera vez en un turno o empiece su turno en ella, puede realizar una tirada de salvación de Carisma. Si tiene éxito, ignora el efecto adicional hasta que abandone la zona. Coraje. Las criaturas afectadas no pueden ser asustadas dentro de la zona. Oscuridad. La oscuridad cubre la zona. La luz normal, así como la luz mágica creada por conjuros de un nivel menor que el espacio de conjuro que utilizaste para lanzar este conjuro, no pueden iluminar esta zona. Luz del día. Una luz brillante inunda la zona. La oscuridad mágica creada por conjuros de un nivel menor que el espacio de conjuro que utilizaste para lanzar este conjuro no puede oscurecer esta zona. Protección contra energía. Las criaturas afectadas dentro de la zona tienen resistencia a un tipo de daño de tu elección, excepto contundente, cortante o penetrante. Vulnerabilidad a la energía. Las criaturas afectadas dentro de la zona son vulnerables a un tipo de daño de tu elección, excepto contundente, cortante o penetrante. Descanso eterno. Los cadáveres enterrados en esta zona no pueden ser convertidos en muertos vivientes. Intromisión extradimensional. Las criaturas afectadas no pueden moverse o viajar utilizando teletransportación o medios extradimensionales o interplanares. Terror. Las criaturas afectadas están asustadas mientras permanezcan dentro de la zona. Silencio. Ningún sonido puede salir de la zona ni penetrar dentro de ella. Lenguas. Las criaturas afectadas pueden comunicarse con cualquier otra criatura en el área, incluso si no comparten un lenguaje común."
    },
    {
      name: "Terreno Alucinatorio",
      level: 4,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Druida",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "300 pies",
      duration: "24 horas",
      description: "Cambias la apariencia del terreno natural dentro de un cubo de 150 pies de lado dentro del alcance, haciendo que se vea, suene y huela como otro tipo de terreno natural. Puedes hacer que un campo abierto o una carretera parezcan un pantano, una colina, una fisura u otro tipo de terreno difícil o infranqueable. Igualmente, una charca podría parecer una pradera de hierba, un precipicio una suave ladera, o un barranco lleno de rocas una carretera ancha y lisa. Las estructuras construidas, el equipo y las criaturas dentro de la zona no cambian de apariencia. Las características táctiles del terreno no cambian, así que lo más probable es que cualquier criatura que entre en el área se dé cuenta de la ilusión. Si la diferencia no es obvia tocando el terreno, una criatura que examine la ilusión con cuidado puede determinar que es irreal si tiene éxito en una prueba de Inteligencia (Investigación) cuya CD es tu salvación de conjuros. Si la supera, verá la ilusión como una imagen borrosa superpuesta sobre el terreno real."
    },
    {
      name: "Dañar",
      level: 6,
      school: "Nigromancia",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Haces brotar una virulenta enfermedad en una criatura que puedas ver dentro del alcance. El objetivo debe hacer una tirada de salvación de Constitución. Sufrirá 14d6 de daño necrótico si falla la tirada, o la mitad del daño si la supera. El daño no puede reducir los puntos de golpe del objetivo por debajo de 1. Además, si falla la tirada de salvación, los puntos de golpe máximos del objetivo se reducirán durante una hora en la cantidad de daño recibida. Cualquier efecto que cure una enfermedad permite que los puntos de golpe máximos del objetivo vuelvan a la normalidad antes del tiempo señalado.",
      damage: "Nivel 6: 14d6"
    },
    {
      name: "Acelerar",
      level: 3,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Elige a una criatura voluntaria que puedas ver dentro del alcance. Hasta que el conjuro termine, la velocidad del objetivo se duplica, gana un bonificador de +2 a su CA, tiene ventaja en tiradas de salvación de Destreza y gana una segunda acción en cada uno de sus turnos. Solo puede utilizar esta acción para Atacar (solo un ataque con arma en caso de tener múltiples por acción), Correr, Destrabarse, Esconderse o Usar un Objeto. Cuando el conjuro termina, el objetivo no podrá moverse o realizar acciones hasta después de su siguiente turno, debido a una ola de somnolencia que lo afecta."
    },
    {
      name: "Curar",
      level: 6,
      school: "Evocación",
      classes: [
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Elige a una criatura que puedas ver dentro del alcance. Una ráfaga de energía positiva cubre al objetivo haciendo que recupere 70 puntos de golpe. El conjuro también termina cualquier efecto de ceguera, sordera o enfermedad que aflija a la criatura. Este conjuro no afecta a muertos vivientes o autómatas."
    },
    {
      name: "Palabra de Curación",
      level: 1,
      school: "Evocación",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción adicional",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Una criatura de tu elección que puedas ver dentro del alcance recupera tantos puntos de golpe como 1d4 + tu modificador por aptitud mágica. Este conjuro no afecta a muertos vivientes o autómatas."
    },
    {
      name: "Calentar Metal",
      level: 2,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Elige un objeto manufacturado de metal, como un arma de metal o una armadura media o pesada de metal, que puedas ver dentro del alcance. Haces que dicho objeto se ponga al rojo vivo. Cualquier criatura en contacto físico con el objeto recibe 2d8 de daño de fuego cuando lanzas el conjuro. Hasta el final del conjuro, puedes usar una acción adicional en cada uno de tus turnos para causar este daño de nuevo. Si una criatura está vistiendo o portando el objeto y sufre el daño, deberá tener éxito en una tirada de salvación de Constitución o soltar el objeto si es que puede. Si no lo suelta, tiene desventaja en tiradas de ataque y pruebas de característica hasta el comienzo de tu próximo turno.",
      damage: "Nivel 2: 2d8, Nivel 3: 3d8, Nivel 4: 4d8, Nivel 5: 5d8, Nivel 6: 6d8, Nivel 7: 7d8, Nivel 8: 8d8, Nivel 9: 9d8"
    },
    {
      name: "Reprensión Infernal",
      level: 1,
      school: "Evocación",
      classes: [
        "Brujo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 reacción que llevas a cabo cuando una criatura que puedas ver a 60 pies o menos te dañe",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Apuntas con el dedo y la criatura que te dañó se ve envuelta momentáneamente en una llamarada infernal. Debe hacer una tirada de salvación de Destreza. Sufrirá 2d10 de daño de fuego si falla la tirada, o la mitad del daño si la supera.",
      damage: "Nivel 1: 2d10, Nivel 2: 3d10, Nivel 3: 4d10, Nivel 4: 5d10, Nivel 5: 6d10, Nivel 6: 7d10, Nivel 7: 8d10, Nivel 8: 9d10, Nivel 9: 10d10"
    },
    {
      name: "Festín de héroes",
      level: 6,
      school: "Conjuración",
      classes: [
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "30 pies",
      duration: "Instantáneo",
      description: "Haces aparecer un gran festín, que incluye comida y bebida magníficas. Se tarda 1 hora en consumir el festín, el cual desaparece al cabo de ese tiempo. Los efectos beneficiosos no comienzan hasta que ha pasado esa hora. Hasta doce criaturas, además de ti, pueden participar del festín. Cualquier criatura que participe obtiene varios beneficios: queda curada de todas las enfermedades y veneno que la aquejan, es inmune al veneno y a ser asustada, y tiene ventaja en todas sus tiradas de salvación de Sabiduría. Además, sus puntos de golpe máximos aumentan en 2d10 y recupera la misma cantidad de puntos de golpe. Estos beneficios duran 24 horas."
    },
    {
      name: "Heroísmo",
      level: 1,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Paladín"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración hasta 1 minuto",
      description: "Infundes valor en una criatura voluntaria a la que toques. Hasta el final del conjuro no puede ser asustada y gana tantos puntos de golpe temporales como tu modificador por aptitud mágica al principio de cada uno de sus turnos. Cuando el conjuro termina pierde todos los puntos de golpe temporales restantes que provengan de este conjuro."
    },
    {
      name: "Risa Horrible de Tasha",
      level: 1,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Una criatura de tu elección que puedas ver dentro del alcance comenzará a percibir todo como hilarantemente divertido, cayendo en un ataque de risa incontrolable si este conjuro le afecta. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o caerá derribado, quedando incapacitado y sin poder levantarse hasta el final de la duración del conjuro. Las criaturas con puntuaciones de Inteligencia de 4 o menos no se ven afectadas. Al final de cada uno de sus turnos y cada vez que recibe daño, el objetivo puede realizar otra tirada de salvación de Sabiduría. Tiene ventaja en esta tirada si es causada por haber recibido daño. Si la supera, el efecto del conjuro termina."
    },
    {
      name: "Inmovilizar Monstruo",
      level: 5,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "90 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Elige a una criatura que puedas ver dentro del alcance. El objetivo debe pasar una tirada de salvación de Sabiduría o quedará paralizado hasta el final de la duración del conjuro. Este conjuro no afecta a muertos vivientes. Al final de cada uno de sus turnos, la criatura puede realizar otra tirada de salvación de Sabiduría. Si tiene éxito, el conjuro termina para ese objetivo."
    },
    {
      name: "Inmovilizar Persona",
      level: 2,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Elige a un humanoide que puedas ver dentro del alcance. El objetivo debe superar una tirada de salvación de Sabiduría o quedará paralizado hasta el final de la duración del conjuro. Al final de cada uno de sus turnos, el humanoide puede realizar otra tirada de salvación de Sabiduría. Si tiene éxito, el conjuro termina para ese objetivo."
    },
    {
      name: "Aura Sagrada",
      level: 8,
      school: "Abjuración",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 minuto",
      description: "Una luz divina baña suavemente tus alrededores en un radio de 30 pies. Las criaturas de tu elección que se encuentren en el área cuando lanzas este conjuro emiten luz tenue en un radio de 5 pies y tienen ventaja en todas las tiradas de salvación. El resto de criaturas tienen desventaja en las tiradas de ataque contra las criaturas que elegiste hasta el final de la duración del conjuro. Además cuando un infernal o un muerto viviente impacte a una criatura afectada con un ataque cuerpo a cuerpo el aura brillará con un fogonazo. Debido a ello el atacante debe tener éxito en una tirada de salvación de Constitución o quedará cegado hasta el final de la duración del conjuro."
    },
    {
      name: "Marca del Cazador",
      level: 1,
      school: "Adivinación",
      classes: [
        "Paladín",
        "Explorador"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción adicional",
      range: "90 pies",
      duration: "Concentración hasta 1 hora",
      description: "Seleccionas a una criatura que puedas ver dentro del alcance y la marcas de manera mística como tu presa. Hasta que termine el conjuro, la criatura sufre 1d6 de daño adicional cuando la impactas con un ataque con arma y tienes ventaja en cualquier prueba de Sabiduría (Percepción) o Sabiduría (Supervivencia) realizada para encontrarla. Si los puntos de golpe del objetivo se reducen a 0 antes de que el conjuro finalice, puedes utilizar una acción adicional en un turno posterior para transferir la marca a una nueva criatura."
    },
    {
      name: "Patrón hipnótico",
      level: 3,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Tejes en el aire un patrón tortuoso de colores que llena un cubo de 30 pies de lado dentro del alcance. El patrón aparece un momento y después desaparece. Todas las criaturas en el área que vean el patrón deben hacer una tirada de salvación de Sabiduría. Si fallan, quedarán hechizadas hasta el final de la duración del conjuro. Mientras una criatura siga hechizada estará incapacitada y su velocidad será 0. El conjuro termina para una criatura afectada si recibe cualquier tipo de daño o alguien utiliza una acción para sacarla de su estupor."
    },
    {
      name: "Tormenta de Hielo",
      level: 4,
      school: "Evocación",
      classes: [
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "300 pies",
      duration: "Instantáneo",
      description: "Una granizada de hielo duro como una roca machaca el suelo en una zona limitada por un cilindro de 20 pies de radio y 40 pies de altura centrado en un punto que se encuentre dentro del alcance. Todas las criaturas en el área deben hacer una tirada de salvación de Destreza. Sufrirán 2d8 de daño contundente y 4d6 de daño de frío si fallan la tirada o la mitad del daño si la superan. El granizo convierte el área de la tormenta en terreno difícil hasta el final de tu próximo turno.",
      damage: "Nivel 4: 2d8 + 4d6, Nivel 5: 3d8 + 4d6, Nivel 6: 4d8 + 4d6, Nivel 7: 5d8 + 4d6, Nivel 8: 6d8 + 4d6, Nivel 9: 7d8 + 4d6"
    },
    {
      name: "Identificar",
      level: 1,
      school: "Adivinación",
      classes: [],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Toque",
      duration: "Instantáneo",
      description: "Elige un objeto o criatura que deberás tocar durante el lanzamiento del conjuro. Si es un objeto mágico o un objeto imbuido de magia, averiguarás sus propiedades y cómo usarlas, si hace falta sintonizarse con él para utilizarlo, y cuántas cargas tiene, si fuera el caso. Si hay conjuros afectando al objeto, sabrás cuáles son. Si el objeto fue creado con un conjuro, también averiguarás cuál es. Si tocas una criatura en lugar de un objeto, averiguarás qué conjuros le están afectando."
    },
    {
      name: "Texto Ilusorio",
      level: 1,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Toque",
      duration: "10 días",
      description: "Escribes en un pergamino, papel u otro material apropiado para la escritura y lo imbuyes con una potente ilusión que se mantiene hasta el final de la duración del conjuro. Para ti y cualquier otra criatura que designes durante el lanzamiento, la escritura parece normal, de tu puño y letra, y transmite el mensaje que tenías pensado cuando lo escribiste. Sin embargo, para todos los demás, el texto parece estar escrito en una escritura mágica o desconocida que lo hace ininteligible. Alternativamente, puedes hacer que el escrito aparente tener un mensaje completamente distinto, escrito con otra caligrafía e idioma, aunque debes conocer este último. Si se disipa el conjuro, tanto el escrito original como la ilusión desaparecen. Una criatura con visión verdadera puede leer el mensaje oculto."
    },
    {
      name: "Cautiverio",
      level: 9,
      school: "Abjuración",
      classes: [
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "30 pies",
      duration: "Hasta que sea disipado",
      description: "Creas un cautiverio mágico para apresar a una criatura que puedas ver dentro del alcance. El objetivo debe tener éxito en una tirada de salvación de Sabiduría o quedará atado por el conjuro; si lo supera, es inmune al mismo si volvieras a lanzarlo. Mientras la criatura está afectada por este conjuro, no envejece y además no necesita comer, beber, ni respirar. Los conjuros de adivinación no podrán localizarla o percibirla. Cuando lanzas este conjuro, eliges una de las siguientes formas de reclusión: ***Entierro.*** El objetivo queda sepultado en un lugar muy profundo bajo el suelo dentro de una esfera de fuerza mágica del tamaño justo para contenerlo. Nada puede atravesar la esfera, ni ninguna criatura podrá entrar o salir de ella utilizando teletransportación o viaje interplanar. El componente especial para esta versión del conjuro es un pequeño orbe de mithral. ***Encadenamiento.*** Pesadas cadenas, firmemente ancladas al suelo, atan al objetivo que está apresado hasta el final del conjuro y no puede moverse o ser desplazado de ninguna manera hasta entonces. El componente especial para esta versión del conjuro es una cadena fina de un metal precioso. ***Presidio cercado.*** El conjuro transporta al objetivo a un pequeño semiplano protegido contra la teletransportación y el viaje interplanar. El semiplano puede ser un laberinto, una jaula, o cualquier estructura o zona confinada de tu elección. El componente especial de esta versión del conjuro es una representación en miniatura de la prisión hecha en jade. ***Contención mínima.*** El objetivo queda reducido a una altura de 1 pulgada y aprisionado dentro de una gema u objeto similar. La luz puede pasar a través de la gema con normalidad (permitiendo que el objetivo vea hacia fuera y otras criaturas puedan ver hacia dentro), pero nada más puede pasar a través, incluso por medios de teletransportación o viaje interplanar. La gema no puede ser cortada o rota mientras el conjuro se mantenga en efecto. El componente especial para esta versión del conjuro es una gran gema transparente, como un corindón, diamante, o rubí. ***Sueño.*** El objetivo cae dormido y no puede ser despertado. El componente especial para esta versión del conjuro consiste en raros hierbas soporíferas. ***Finalizar el Conjuro.*** Durante el lanzamiento del conjuro, en cualquiera de sus versiones, puedes especificar una condición que causará que el conjuro termine y libere al objetivo. La condición puede ser tan específica o elaborada como elijas, pero el GM debe acordar que la condición es razonable y tiene una probabilidad de ocurrir. Las condiciones pueden basarse en el nombre de una criatura, identidad, o deidad, pero por lo demás deben basarse en acciones u cualidades observables y no en intangibles tales como nivel, clase, o puntos de golpe. Un conjuro de disipar magia solo puede terminar el conjuro si se lanza como un conjuro de nivel 9, apuntando ya sea a la prisión o al componente especial utilizado para crearlo. Solo puedes usar un componente especial en particular para crear una prisión a la vez. Si lanzas el conjuro nuevamente usando el mismo componente, el objetivo de la primera lanzada es inmediatamente liberado de su atadura."
    },
    {
      name: "Nube Incendiaria",
      level: 8,
      school: "Conjuración",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "150 pies",
      duration: "Hasta 1 minuto",
      description: "Una nube de humo turbulento veteado de ascuas candentes aparece en una zona esférica de 20 pies de radio centrada en un punto que se encuentre dentro del alcance. La nube se extiende más allá de las esquinas y la zona se considera muy oscura. Se mantiene hasta el final de la duración del conjuro o hasta que un viento de velocidad moderada (al menos 10 millas por hora) la disperse. Cuando la nube aparece todas las criaturas en el área deben hacer una tirada de salvación de Destreza. Sufrirán 10d8 de daño de fuego si fallan la tirada o la mitad del daño si la superan. Las criaturas también deberán realizar esta tirada de salvación cuando entren en la zona del conjuro por primera vez en un turno dado o cuando acaben su turno en ella. La nube se mueve 10 pies directamente alejándose de ti en una dirección que tú elijas al inicio de cada uno de tus turnos.",
      damage: "Nivel 8: 10d8"
    },
    {
      name: "Infligir Heridas",
      level: 1,
      school: "Nigromancia",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Haz un ataque de conjuro cuerpo a cuerpo contra una criatura que se encuentre dentro del alcance. Si impacta, el objetivo recibe 3d10 de daño necrótico.",
      damage: "Nivel 1: 3d10, Nivel 2: 4d10, Nivel 3: 5d10, Nivel 4: 6d10, Nivel 5: 7d10, Nivel 6: 8d10, Nivel 7: 9d10, Nivel 8: 10d10, Nivel 9: 11d10"
    },
    {
      name: "Plaga de Insectos",
      level: 5,
      school: "Conjuración",
      classes: [
        "Clérigo",
        "Druida",
        "Hechicero"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "300 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Llenas de voraces langostas una zona esférica de 20 pies de radio alrededor de un punto de tu elección. La esfera se extiende más allá de las esquinas y se mantiene hasta el final de la duración del conjuro. La zona ocupada por ella se considera ligeramente oscura además de terreno difícil. Cuando aparece el enjambre todas las criaturas en el área deben hacer una tirada de salvación de Constitución. Sufrirán 4d10 de daño perforante si fallan la tirada, o la mitad del daño si la superan. Las criaturas también deberán realizar esta tirada de salvación cuando entren en la zona del conjuro por primera vez en un turno dado o cuando acaben su turno en ella.",
      damage: "Nivel 5: 4d10, Nivel 6: 5d10, Nivel 7: 6d10, Nivel 8: 7d10, Nivel 9: 8d10"
    },
    {
      name: "Invocación instantánea de Drawmij",
      level: 6,
      school: "Conjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Toque",
      duration: "Hasta que sea disipado",
      description: "Tocas un objeto que pese un máximo de 10 libras o cuya dimensión más larga sea 6 pies o menos. El conjuro deja una marca invisible en su superficie y graba también de forma invisible el nombre del objeto en el zafiro que usas como componente material. Cada vez que lances este conjuro debes utilizar un zafiro diferente. En cualquier momento posterior puedes usar tu acción para decir el nombre del objeto y aplastar el zafiro. El objeto aparece de forma instantánea en tu mano independientemente de la distancia física o en qué plano esté y el conjuro termina. Si otra criatura tiene el objeto aplastar el zafiro no trae el objeto hasta ti pero en vez de eso aprendes el nombre de la criatura que lo tiene y su localización aproximada en ese momento. Disipar magia o un efecto similar aplicado con éxito al zafiro también termina el conjuro."
    },
    {
      name: "Invisibilidad",
      level: 2,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración, hasta 1 hora",
      description: "Una criatura a la que tocas se vuelve invisible hasta que el conjuro termine. Además, cualquier cosa que vista o lleve consigo será también invisible mientras siga llevándola encima. Para cada objetivo, el conjuro termina si ataca o lanza un conjuro."
    },
    {
      name: "Baile Irresistible de Otto",
      level: 6,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Elige a una criatura que puedas ver dentro del alcance. Comenzará a ejecutar una danza cómica en el lugar en el que se encuentre: arrastrando los pies, taconeando y haciendo cabriolas hasta el final de la duración del conjuro. Las criaturas inmunes a ser hechizadas no se ven afectadas por este conjuro. El objetivo debe utilizar todo su movimiento en bailar y no puede moverse de donde esté. Tendrá desventaja en tiradas de salvación de Destreza y en tiradas de ataque. Mientras siga afectado por el conjuro, las tiradas de ataque de otras criaturas contra él tendrán ventaja. Como acción, la criatura bailarina puede hacer una tirada de salvación de Sabiduría para intentar recuperar el control. Si tiene éxito en la tirada, el conjuro termina inmediatamente."
    },
    {
      name: "Salto",
      level: 1,
      school: "Transmutación",
      classes: [
        "Druida",
        "Explorador",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "1 minuto",
      description: "Tocas a una criatura. Su distancia de salto se triplica hasta el final del conjuro."
    },
    {
      name: "Abrir",
      level: 2,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Elige un objeto que puedas ver dentro del alcance. Este puede ser una puerta, una caja, un cofre, unas esposas, un candado, o cualquier otro objeto que posea alguna manera mágica o mundana de impedir el acceso. Un objetivo que esté cerrado mediante una cerradura normal o que esté atascado o atrancado, se abre, desatasca o desatranca. Si el objeto tenía varios cerrojos, solo se desbloquea uno de ellos. Si eliges un objetivo que está cerrado mediante cerradura arcana, ese conjuro queda anulado durante 10 minutos y durante ese tiempo el objeto se puede abrir y cerrar con normalidad. Cuando lanzas este conjuro, un fuerte golpe suena desde el objeto, audible desde 300 pies de distancia."
    },
    {
      name: "Conocer las Leyendas",
      level: 5,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Nombra o describe a una persona lugar u objeto. El conjuro te proporciona un breve resumen del conocimiento más significativo sobre lo nombrado. Puede ser en forma de cuentos actuales, historias olvidadas o incluso información secreta que nunca ha sido de dominio público. Si lo nombrado no es digno de haber formado parte de una leyenda no consigues ninguna información. Cuanta más información tuvieras antes más precisa y detallada será la nueva información que recibas. La información obtenida será cierta pero puede estar disimulada bajo un lenguaje metafórico. Por ejemplo, si tienes una misteriosa hacha mágica en la mano, el conjuro podría proporcionar la siguiente información: \"Así el mal caiga sobre el malvado cuya mano toque esta hacha, pues hasta su empuñadura rajará la mano del malintencionado. Únicamente un verdadero Hijo de la Piedra, devoto y amado por Moradin, podrá despertar los verdaderos poderes del arma y solo si la palabra sagrada Rudnogg brota de sus labios\"."
    },
    {
      name: "Restablecimiento Menor",
      level: 2,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Paladín",
        "Explorador"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Tocas a una criatura y curas una enfermedad o un estado que le aflija. Dicho estado puede ser ceguera, sordera, parálisis o envenenamiento."
    },
    {
      name: "Levitar",
      level: 2,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Una criatura u objeto de tu elección que puedas ver dentro del alcance se eleva hasta 20 pies y se mantiene suspendido hasta el final de la duración del conjuro. El conjuro puede hacer levitar a un objetivo de hasta 500 libras. Una criatura no voluntaria que tenga éxito en una tirada de salvación de Constitución no se verá afectada. El objetivo solo puede moverse empujándose o tirando de un objeto fijo o una superficie a su alcance (como una pared o techo) lo que le permite desplazarse como si estuviera escalando. En tu turno puedes variar la altura del objetivo en hasta 20 pies en cada sentido. Si tú mismo eres el objetivo te puedes mover hacia arriba o abajo como parte de tu movimiento. En caso contrario, para mover al objetivo tienes que utilizar tu acción manteniéndole siempre dentro del alcance. Cuando el conjuro acabe el objetivo flotará suavemente hasta el suelo si todavía está en el aire."
    },
    {
      name: "Luz",
      level: 0,
      school: "Evocación",
      classes: [
        "Bardo",
        "Clérigo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "1 hora",
      description: "Tocas un objeto cuyo tamaño sea menor o igual a 10 pies en todas las dimensiones. Hasta que el conjuro termine, el objeto emitirá luz brillante en un radio de 20 pies y luz tenue 20 pies más allá. La luz puede tener el color que desees. Tapar completamente el objeto con un material opaco bloquea la luz. El conjuro termina si lo lanzas de nuevo o si utilizas una acción para finalizarlo. Si eliges como objetivo un objeto portado por una criatura hostil, esta última debe tener éxito en una tirada de salvación de Destreza para evitar el conjuro."
    },
    {
      name: "Lightning Bolt",
      level: 3,
      school: "Evocation",
      classes: [
        "Sorcerer",
        "Wizard"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 action",
      range: "Self",
      duration: "Instantaneous",
      description: "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren't being worn or carried.",
      damage: "Nivel 3: 8d6, Nivel 4: 9d6, Nivel 5: 10d6, Nivel 6: 11d6, Nivel 7: 12d6, Nivel 8: 13d6, Nivel 9: 14d6"
    },
    {
      name: "Localizar Animales o Plantas",
      level: 2,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Describe o nombra un tipo concreto de bestia o planta. Concentrándote en la voz de la naturaleza que te rodea, averiguas la dirección y distancia a la que se encuentra una criatura o planta del tipo escogido hasta un máximo de 5 millas, suponiendo que haya alguna."
    },
    {
      name: "Localizar Criatura",
      level: 4,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Paladín",
        "Explorador",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 hora",
      description: "Describe o nombra a una criatura con la que estás familiarizado. Puedes sentir la dirección hacia la localización del objetivo mientras este esté a 1.000 pies o menos de ti. Si la criatura se está moviendo sabes en qué dirección. El conjuro puede localizar a una criatura en particular que conozcas o la criatura más cercana de un tipo concreto (como humano o unicornio) siempre que hayas visto al menos una vez a una criatura de ese tipo de cerca (a menos de 30 pies). Si la criatura que describes o nombras tiene una forma distinta (si está por poner un ejemplo bajo los efectos del conjuro polimorfar) este conjuro no es capaz de localizarla. Tampoco podrá localizar a una criatura si el camino directo hasta ella está bloqueado por una corriente de agua de al menos 10 pies de ancho."
    },
    {
      name: "Localizar objeto",
      level: 2,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Paladín",
        "Explorador",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración, hasta 10 minutos",
      description: "Describe o nombra un objeto con el que estés familiarizado. Puedes sentir la dirección hacia la localización del objeto mientras esté a 1.000 pies o menos de ti. Si el objeto se está moviendo, sabes en qué dirección se mueve. El conjuro puede localizar un objeto concreto que conozcas, siempre que hayas visto un objeto de ese tipo de cerca, al menos una vez (a menos de 30 pies). Alternativamente, el conjuro puede localizar el objeto más cercano de un tipo particular, como una clase de prenda, joyería, muebles, herramientas, o armas. No serás capaz de localizar el objeto si cualquier grosor de plomo, incluso una lámina fina, bloquea el camino directo entre tú y el objeto."
    },
    {
      name: "Longstrider",
      level: 1,
      school: "Transmutation",
      classes: [
        "Bard",
        "Druid",
        "Ranger",
        "Wizard"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 action",
      range: "Touch",
      duration: "1 hour",
      description: "You touch a creature. The target's speed increases by 10 feet until the spell ends."
    },
    {
      name: "Armadura de mago",
      level: 1,
      school: "Abjuración",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "8 horas",
      description: "Tocas a una criatura voluntaria que no lleve armadura y una fuerza mágica protectora la rodea hasta que el conjuro termine. La Clase de Armadura (CA) del objetivo pasa a ser 13 + su modificador de Destreza. El conjuro termina si el objetivo se pone una armadura o si utilizas una acción para finalizarlo."
    },
    {
      name: "Mano de Mago",
      level: 0,
      school: "Conjuración",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "1 minuto",
      description: "Conjuras una mano espectral flotante en un punto de tu elección dentro del alcance. La mano durará hasta el final de la duración del conjuro o hasta que utilices una acción para finalizarlo. Además, la mano desaparecerá si en algún momento está a más de 30 pies de ti o si lanzas este conjuro de nuevo. Puedes emplear tu acción para controlar la mano, haciendo que manipule un objeto, abra una puerta o recipiente que no esté cerrado con llave, retire o guarde un objeto en un recipiente abierto o vierta el contenido de un vial. Cada vez que controles la mano de esta forma, puedes también moverla hasta 30 pies. La mano no puede atacar, activar objetos mágicos o llevar más de 10 libras de peso."
    },
    {
      name: "Círculo Mágico",
      level: 3,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Paladín",
        "Brujo",
        "Hechicero"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "10 pies",
      duration: "1 hora",
      description: "Creas un cilindro de energía mágica de 10 pies de radio y 20 pies de alto centrado en un punto del suelo que puedes ver dentro del alcance. Las intersecciones del cilindro con suelos o paredes quedan marcadas por una línea de runas brillantes. Elige uno o más de los siguientes tipos de criatura: celestiales, elementales, feéricos, infernales o muertos vivientes. El círculo afecta a las criaturas del tipo o tipos escogidos de las siguientes maneras: - Las criaturas de los tipos elegidos no pueden entrar en el cilindro mediante medios no mágicos. Si intentan usar teletransportación o viaje interplanar para entrar, primero deben realizar una tirada de salvación de Carisma. - Las criaturas de los tipos elegidos tienen desventaja en las tiradas de ataque contra objetivos dentro del cilindro. - Las criaturas dentro del cilindro no pueden ser hechizadas, asustadas o poseídas por las criaturas de los tipos elegidos. Cuando lanzas este conjuro, puedes elegir que la magia funcione de forma inversa, es decir, evitando que las criaturas de los tipos escogidos salgan del cilindro y protegiendo a las que están fuera del mismo."
    },
    {
      name: "Tarro Arcano",
      level: 6,
      school: "Nigromancia",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Personal",
      duration: "Hasta que se disipa",
      description: "Tu cuerpo queda en un estado catatónico mientras tu alma lo abandona y entra en el contenedor que utilizaste para el componente material del conjuro. Mientras tu alma habita el contenedor, puedes percibir tus alrededores como si estuvieras en el espacio del contenedor. No puedes moverte ni usar reacciones. La única acción que puedes tomar es proyectar tu alma hasta 100 pies fuera del contenedor, ya sea regresando a tu cuerpo viviente (y terminando el conjuro) o intentando poseer el cuerpo de un humanoide. Puedes intentar poseer cualquier humanoide dentro de los 100 pies de ti que puedas ver (las criaturas protegidas por un conjuro de protección contra el mal y el bien o círculo mágico no pueden ser poseídas). El objetivo debe realizar una tirada de salvación de carisma. En caso de fallo, tu alma se mueve al cuerpo del objetivo, y el alma del objetivo queda atrapada en el contenedor. En caso de éxito, el objetivo resiste tus esfuerzos por poseerlo, y no puedes intentar poseerlo nuevamente durante 24 horas. Una vez que posees el cuerpo de una criatura, lo controlas. Tus estadísticas de juego son reemplazadas por las estadísticas de la criatura, aunque retienes tu alineamiento y tus puntuaciones de Inteligencia, Sabiduría y Carisma. Conservas el beneficio de las características de tu propia clase. Si el objetivo tiene niveles de clase, no puedes usar ninguna de sus características de clase. Mientras tanto, el alma de la criatura poseída puede percibir desde el contenedor usando sus propios sentidos, pero no puede moverse ni realizar acciones. Mientras posees un cuerpo, puedes usar tu acción para regresar del cuerpo anfitrión al contenedor si está dentro de los 100 pies de ti, devolviendo el alma de la criatura anfitriona a su cuerpo. Si el cuerpo anfitrión muere mientras estás en él, la criatura muere, y debes realizar una tirada de salvación de carisma contra tu propia CD de conjuro. En caso de éxito, regresas al contenedor si está dentro de los 100 pies de ti. De lo contrario, mueres. Si el contenedor se destruye o el conjuro termina, tu alma regresa inmediatamente a tu cuerpo. Si tu cuerpo está a más de 100 pies de ti o si tu cuerpo está muerto cuando intentas regresar a él, mueres. Si el alma de otra criatura está en el contenedor cuando se destruye, el alma de la criatura regresa a su cuerpo si el cuerpo está vivo y dentro de los 100 pies. De lo contrario, esa criatura muere. Cuando el conjuro termina, el contenedor se destruye."
    },
    {
      name: "Proyectil Mágico",
      level: 1,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Instantáneo",
      description: "Creas tres dardos brillantes de fuerza mágica. Cada dardo impacta a una criatura de tu elección a la que puedas ver dentro del alcance. La criatura recibe 1d4 + 1 de daño de fuerza por cada dardo. Todos los dardos impactan a la vez y puedes repartirlos como desees entre varios objetivos.",
      damage: "Nivel 1: 1d4 + 1, Nivel 2: 1d4 + 1, Nivel 3: 1d4 + 1, Nivel 4: 1d4 + 1, Nivel 5: 1d4 + 1, Nivel 6: 1d4 + 1, Nivel 7: 1d4 + 1, Nivel 8: 1d4 + 1, Nivel 9: 1d4 + 1"
    },
    {
      name: "Boca Mágica",
      level: 2,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "30 pies",
      duration: "Hasta que sea disipado",
      description: "Implantas un mensaje en un objeto dentro del alcance que será pronunciado en voz alta cuando se cumpla la condición de activación. Eliges un objeto que puedas ver y que no lleva o viste otra criatura. Después dices el mensaje, que debe estar formado por 25 palabras o menos aunque puede ser retransmitido durante como mucho 10 minutos. Por último determinas las circunstancias que activarán el conjuro para entregar tu mensaje. Cuando se den estas circunstancias, una boca mágica aparecerá en el objeto y recitará el mensaje con tu voz y con el mismo volumen que utilizaste. Si el objeto que eliges tiene una boca o algo que parezca una boca (como la de una estatua, por ejemplo), la boca mágica aparecerá ahí, con lo que parecerá que las palabras son pronunciadas por la boca del objeto. Cuando lanzas este conjuro puedes hacer que termine después de entregar el mensaje o que permanezca y el mensaje sea repetido cada vez que ocurran las circunstancias que lo activan. Estas circunstancias pueden ser tan generales o detalladas como quieras pero deben estar basadas en condiciones visuales o auditivas que ocurran a 30 pies o menos del objeto. Por ejemplo, puedes hacer que la boca hable cuando una criatura se acerque a menos de 30 pies o cuando suene una campana plateada dentro de esa distancia."
    },
    {
      name: "Arma Mágica",
      level: 2,
      school: "Transmutación",
      classes: [
        "Paladín",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción adicional",
      range: "Toque",
      duration: "Hasta 1 hora",
      description: "Tocas un arma no mágica. Hasta el final del conjuro esa arma se convierte en un arma mágica con un bonificador de +1 a las tiradas de ataque y de daño."
    },
    {
      name: "Mansión magnífica de Mordenkainen",
      level: 7,
      school: "Conjuración",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "300 pies",
      duration: "24 horas",
      description: "Conjuras una morada de otro plano dentro del alcance hasta el final de la duración del conjuro. Eliges donde está localizada una de las entradas. Brilla débilmente y tiene 5 pies de ancho y 10 de alto. Tú y cualquier otra criatura que designes al lanzar el conjuro podéis entrar en la morada mientras el portal de entrada siga abierto. Puedes abrirlo o cerrarlo si estás a 30 pies de él. Mientras permanezca cerrado es invisible. A través del portal se llega a un fastuoso recibidor que da paso a numerosas habitaciones. La atmósfera es limpia, despejada y cálida. Puedes crear cualquier configuración de planta que quieras pero el espacio no puede tener más de 50 cubos, cada uno de 10 pies de lado. La mansión está decorada y equipada como desees. Hay suficiente comida para un banquete de nueve platos para 100 personas. El servicio está compuesto por 100 sirvientes cuasi transparentes que atienden a todo el que entra. Tú decides la apariencia y vestimenta de estos criados. Obedecen completamente tus órdenes. Pueden llevar a cabo cualquier tarea que pudiera realizar un sirviente humano normal pero no pueden atacar o realizar acciones que dañen directamente a otra criatura. Por tanto pueden traer y llevar cosas, limpiar, remendar, doblar la ropa, encender el fuego, servir comida, escanciar vino, etc. Los sirvientes pueden ir a cualquier parte de la mansión pero no pueden abandonarla. Los muebles y otros objetos creados por este conjuro se convierten en humo si son sacados del alojamiento. Cuando el conjuro termina, cualquier criatura dentro del espacio extradimensional es expulsada a un espacio libre cercano a la entrada."
    },
    {
      name: "Imagen Mayor",
      level: 3,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Creas una imagen de un objeto, una criatura u otro tipo de fenómeno visible cuyas dimensiones no excedan las de un cubo de 20 pies de lado. La imagen aparece en un sitio que puedas ver dentro del alcance y se mantiene hasta el final de la duración del conjuro. Parece completamente real, incluyendo sonidos, olores y temperatura apropiados a lo que se representa. No puedes crear suficiente calor o frío para hacer daño, sonido lo suficientemente fuerte como para hacer daño de trueno o ensordecer a una criatura, o un olor que pudiera causar náuseas a una criatura (como el hedor de un troglodita). Mientras estés dentro del alcance de la ilusión, puedes utilizar tu acción para moverla a otro sitio dentro de dicho alcance. Al cambiarla de sitio, puedes alterar su apariencia de forma que sus movimientos parezcan naturales. Por ejemplo, si creas la imagen de una criatura y la mueves, puedas alterarla de forma que parezca estar andando. De forma similar, puedes hacer que la ilusión produzca distintos sonidos en diferentes momentos, incluso mantener una conversación, por ejemplo. La interacción física con la imagen revela que es una ilusión, ya que las cosas la atraviesan. Si una criatura emplea su acción para examinar la imagen, puede determinar que es una ilusión si tiene éxito en una prueba de Inteligencia (Investigación) cuya CD es tu salvación de conjuros. Si la criatura descubre que la imagen es una ilusión, podrá ver a través de ella y sus otras cualidades sensoriales se vuelven tenues para esta criatura."
    },
    {
      name: "Curar Heridas en Masa",
      level: 5,
      school: "Evocación",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Una ola de curación emana desde un punto de tu elección dentro del alcance. Elige hasta 6 criaturas dentro de una esfera de 30 pies centrada en ese punto. Cada una recupera tantos puntos de golpe como 3d8 + tu modificador por aptitud mágica. Este conjuro no afecta a muertos vivientes o autómatas."
    },
    {
      name: "Curar en Masa",
      level: 9,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Una riada de energía curativa fluye a través de ti hacia las criaturas heridas a tu alrededor. Puedes elegir cualquier número de criaturas voluntarias que puedas ver dentro del alcance. Recuperan un total de 700 puntos de golpe, distribuidos como desees. Además, cualquier criatura afectada por este hechizo también se cura de todas las enfermedades y de cualquier efecto que las mantuviera ciegas o sordas. Este hechizo no tiene efecto sobre muertos vivientes o autómatas."
    },
    {
      name: "Palabra de Curación en Masa",
      level: 3,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción adicional",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Formulando palabras de sanación haces que hasta seis criaturas de tu elección que puedas ver dentro del alcance recuperen cada una tantos puntos de golpe como 1d4 + tu modificador por aptitud mágica. Este conjuro no afecta a muertos vivientes o autómatas."
    },
    {
      name: "Sugestión en Masa",
      level: 6,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "24 horas",
      description: "Sugieres un curso de acción (limitado a una o dos frases) a hasta doce criaturas a las que puedas ver dentro del alcance y que puedan oírte y comprenderte. Las criaturas que no puedan ser hechizadas no se ven afectadas. La sugerencia tiene que estar dictada de manera que parezca razonable. Pedir a la criatura que se apuñale, empale en una lanza, se inmole o realice cualquier otra actividad claramente dañina da por finalizado el conjuro. Cada objetivo debe hacer una tirada de salvación de Sabiduría. Si falla llevará a cabo la acción que le sugieres hasta donde le permitan sus capacidades. Esta acción puede continuar hasta el final de la duración del conjuro. Si la sugerencia puede ser realizada en menos tiempo, el conjuro termina cuando el objetivo completa la tarea encomendada. Puedes especificar que ciertas condiciones activen una actividad especial dentro de la duración del conjuro. Por ejemplo, puedes sugerir a un grupo de soldados que den todo su dinero al primer mendigo que encuentren. Si la condición no se cumple antes de que termine el conjuro, entonces la actividad no se lleva a cabo. Si tú o cualquiera de tus compañeros dañáis a alguno de los objetivos, el conjuro termina para esa criatura."
    },
    {
      name: "Laberinto",
      level: 8,
      school: "Conjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Exilias a una criatura que puedas ver dentro del alcance a un semiplano laberíntico. Permanecerá en su interior hasta el final de la duración del conjuro o hasta que escape del laberinto. Una criatura puede utilizar su acción para intentar escapar. Para ello realizará una prueba de Inteligencia CD 20. Si tiene éxito escapa y el conjuro termina (los minotauros y los demonios goristro tienen éxito automáticamente). Cuando el conjuro termine el objetivo reaparecerá en el espacio que ocupaba antes o en el más cercano disponible si ese ya está ocupado."
    },
    {
      name: "Fundirse con la piedra",
      level: 3,
      school: "Transmutación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "8 horas",
      description: "Entras en un objeto o superficie de piedra lo suficientemente grande como para contenerte. Tu cuerpo y tu equipo se funden con la piedra hasta el final de la duración del conjuro. Utilizando tu movimiento entras en la piedra a partir de un punto que puedas tocar. No serás visible o detectable mediante ningún medio no mágico. Mientras estás fundido con la piedra no puedes ver lo que ocurre fuera y cualquier prueba de Sabiduría (Percepción) que realices para escuchar se hace con desventaja. Sin embargo todavía eres consciente del paso del tiempo y puedes lanzar conjuros sobre ti mismo mientras estás fundido en la piedra. Eres capaz de usar tu movimiento para abandonar la piedra por donde entraste pero esto finaliza el conjuro. No te puedes mover de ninguna otra manera. El daño físico superficial a la piedra no te afecta pero su destrucción parcial o un cambio en su forma (tal que ya no pueda contenerte) te expulsa y sufres 6d6 de daño contundente. La destrucción completa de la piedra (o su transmutación a una sustancia distinta) también te expulsa infligiéndote 50 de daño contundente en el proceso. Si eres expulsado quedas derribado en el espacio desocupado más cercano al de tu entrada."
    },
    {
      name: "Reparar",
      level: 0,
      school: "Transmutación",
      classes: [
        "Clérigo",
        "Bardo",
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Toque",
      duration: "Instantáneo",
      description: "Este conjuro repara una sola grieta o ruptura en un objeto que toques, como un eslabón roto en una cadena, las dos mitades de una llave partida, una capa rasgada o una fuga en una bota de vino. Mientras la grieta o desgarrón no sea de más de 1 pie en alguna dimensión, lo arreglas sin dejar rastro del daño. Este conjuro puede reparar el componente físico de un objeto mágico o de un autómata, pero no puede restaurar su magia."
    },
    {
      name: "Mensaje",
      level: 0,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "1 asalto",
      description: "Señalas con el dedo a una criatura dentro del alcance y susurras un mensaje. El objetivo (y solo él) escucha el mensaje y puede contestar en un susurro que solo tú puedes oír. Puedes lanzar este conjuro a través de objetos sólidos si estás familiarizado con el objetivo y sabes que se encuentra tras el obstáculo. Aunque no tiene que seguir una línea recta y puede viajar libremente torciendo esquinas o atravesando aberturas, este conjuro se ve bloqueado por el silencio mágico, 1 pie de piedra, 1 pulgada de cualquier metal común, una lámina fina de plomo, o 3 pies de madera o tierra."
    },
    {
      name: "Tormenta de Meteoritos",
      level: 9,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "1 milla",
      duration: "Instantáneo",
      description: "Abrasadores orbes de fuego caen en picado al suelo en cuatro puntos distintos que puedas ver dentro del alcance. Todas las criaturas en una esfera de 40 pies centrada en cada uno de esos puntos deben hacer una tirada de salvación de Destreza. La esfera se extiende más allá de las esquinas. Sufrirán 20d6 de daño contundente y 20d6 de daño de fuego si fallan la tirada o la mitad del daño si la superan. Una criatura en el área de más de uno de los estallidos solo se ve afectada una vez. El conjuro daña los objetos que se encuentren en el área haciendo arder los que sean inflamables y que no lleve o vista alguien.",
      damage: "Nivel 9: 20d6 + 20d6"
    },
    {
      name: "Mente en Blanco",
      level: 8,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "24 horas",
      description: "Hasta el final del conjuro, una criatura voluntaria que toques es inmune al daño psíquico, a cualquier efecto que pudiera percibir sus emociones o conocer sus pensamientos, a conjuros de adivinación y al estado hechizado. Frustra incluso el conjuro deseo u otros de poder similar que podrían ser usados para afectar la mente del objetivo o conseguir información sobre él."
    },
    {
      name: "Ilusión menor",
      level: 0,
      school: "Ilusionismo",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "1 minuto",
      description: "Creas un sonido o una imagen de un objeto situado dentro del alcance y que permanece hasta el final de la duración del conjuro. La ilusión también termina si lanzas el conjuro de nuevo o si utilizas una acción para finalizarlo. Si creas un sonido su volumen puede estar entre el de un susurro y el de un grito. Puede ser tu voz, la de otra criatura, el rugido de un león, un redoblar de tambores, o cualquier otro sonido de tu elección. Podrá sonar en momentos concretos o continuamente hasta que termine el conjuro, lo que prefieras. Si creas la imagen de un objeto (como una silla, pisadas embarradas o un pequeño cofre) no puede ser mayor que un cubo de 5 pies de lado. La imagen no puede generar sonido, luz, olor o cualquier otro efecto sensorial. La interacción física con la imagen revela que es una ilusión ya que las cosas la atraviesan. Si una criatura utiliza su acción para examinar la imagen o el sonido, puede determinar que es una ilusión si tiene éxito en una prueba de Inteligencia (Investigación) cuya CD es tu salvación de conjuros. Si averigua que es una ilusión, su aspecto se vuelve tenue para esa criatura."
    },
    {
      name: "Espejismo Arcano",
      level: 7,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Druida",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "10 minutos",
      range: "Vista",
      duration: "10 días",
      description: "Cambia la apariencia del terreno en una zona de hasta 1 milla cuadrada haciendo que se vea, suene y huela como otro tipo de terreno natural, aunque la forma general del terreno sigue pareciendo la misma. Puedes hacer que un campo abierto o una carretera parezcan un pantano, una colina, una fisura u otro tipo de terreno difícil o infranqueable. Una charca puede parecer una pradera de hierba, un precipicio una suave ladera, o un barranco lleno de rocas una carretera ancha y lisa. De forma similar, puedes alterar la apariencia de una estructura o añadir otras donde antes no las hubiera. El conjuro no disfraza, oculta o añade criaturas. La ilusión incluye elementos auditivos, visuales, táctiles y olfatorios, así que es capaz de convertir terreno abierto en terreno difícil (o viceversa) o impedir el movimiento a través de la zona de alguna otra manera. Cualquier elemento del terreno ilusorio (como un palo o una roca) que sea llevado fuera del área del conjuro desaparecerá inmediatamente. Las criaturas con visión verdadera pueden ver la forma real del terreno a través de la ilusión; sin embargo, el resto de elementos permanecen, por lo que aunque la criatura sea consciente del conjuro, puede seguir interactuando físicamente con la ilusión."
    },
    {
      name: "Imagen múltiple",
      level: 2,
      school: "Ilusión",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "1 minuto",
      description: "Tres duplicados ilusorios de ti mismo aparecen en tu espacio. Hasta el final del conjuro, se mueven contigo e imitan tus acciones, cambiando de posición y haciendo imposible saber cuál imagen es la real. Puedes utilizar tu acción para hacer desaparecer los duplicados. Cada vez que una criatura te elija como objetivo de un ataque mientras el conjuro esté activo, tira un d20 para determinar si el ataque en realidad tiene como objetivo a uno de tus duplicados. Si tienes tres duplicados, sacando un 6 o más cambia el objetivo a un duplicado en lugar de a ti. Con dos duplicados, sacando un 8 o más. Con un duplicado, sacando un 11 o más. La CA de los duplicados es 10 + tu modificador por Destreza. Si un ataque impacta a un duplicado, este queda destruido. Un duplicado solo puede ser destruido por un ataque que lo impacte, ya que es inmune a todo el resto de daño y efectos. El conjuro termina cuando los tres duplicados han sido destruidos. Una criatura no se verá afectada por este conjuro si no puede ver, si utiliza sentidos distintos a la vista como la visión ciega, o si es capaz de percibir las ilusiones como falsas, como con visión verdadera."
    },
    {
      name: "Engañar",
      level: 5,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 hora",
      description: "Te vuelves invisible a la vez que un doble ilusorio de ti aparece donde estás. El doble permanece hasta el final de la duración del conjuro pero la invisibilidad acaba si atacas o lanzas un conjuro. Puedes utilizar tu acción para mover a tu doble ilusorio hasta dos veces tu velocidad y hacer que hable, haga gestos, o se comporte como quieras. Eres capaz de ver a través de sus ojos y oír a través de sus oídos como si estuvieras donde está él. En cada uno de tus turnos como acción adicional, puedes pasar de sus sentidos a los tuyos o viceversa. Mientras estés usando sus sentidos quedas cegado y ensordecido respecto a tus propios sentidos."
    },
    {
      name: "Paso Brumoso",
      level: 2,
      school: "Conjuración",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción adicional",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Una niebla plateada te rodea brevemente mientras te teletransportas hasta 30 pies a un espacio libre que puedas ver."
    },
    {
      name: "Alterar los Recuerdos",
      level: 5,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Intentas reformar las memorias de otra criatura. Una criatura de tu elección que puedas ver dentro del alcance debe realizar una tirada de salvación de Sabiduría. Si tú o alguna criatura amistosa hacia ti estáis luchando contra ella, tiene ventaja en esta tirada de salvación. Si falla, queda hechizada hasta el final de la duración del conjuro. El objetivo hechizado queda incapacitado y no es consciente de su entorno, aunque todavía puede oírte. Si recibe cualquier daño o es objetivo de otro conjuro, alternar los recuerdos termina y no se cambia ninguno de sus recuerdos. Mientras dure el conjuro, puedes afectar la memoria del objetivo en lo que respecta a un evento que haya experimentado en las últimas 24 horas y que no haya durado más de 10 minutos. También eres capaz de eliminar permanentemente todos los recuerdos de ese evento, permitir al objetivo recordarlo con total claridad y hasta el último detalle, cambiar su memoria de los detalles o crear un recuerdo de otro evento distinto. Debes hablar al objetivo para describirle cómo su memoria queda afectada y debe ser capaz de entender tu idioma para que los recuerdos modificados se asienten. Su mente llenará cualquier hueco que deje tu descripción. Si el conjuro termina antes de que hayas acabado de describir los recuerdos modificados, la memoria de la criatura no se ve alterada. En caso contrario, los recuerdos se asentarán cuando acabe el conjuro. Un recuerdo modificado no afectará necesariamente al comportamiento de una criatura, especialmente si el recuerdo contradice sus inclinaciones naturales, su alineamiento o sus creencias. Un recuerdo modificado ilógico, como el de cuánto disfrutó el objetivo al bañarse en ácido, es rechazado por su mente como si fuera un mal sueño. El DM puede considerar que un recuerdo modificado es demasiado absurdo como para afectar a una criatura de manera significativa. Un conjuro de levantar maldición o restablecimiento mayor lanzado sobre el objetivo recupera los verdaderos recuerdos de la criatura."
    },
    {
      name: "Rayo de Luna",
      level: 2,
      school: "Evocación",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Hasta 1 minuto",
      description: "Un rayo plateado de luz pálida ilumina una zona limitada por un cilindro de 5 pies de radio y 40 pies de altura centrado en un punto dentro del alcance. Hasta el final del conjuro una luz tenue llena el cilindro. Cuando una criatura entra en el área del conjuro por primera vez en un turno o cuando empieza su turno en ella queda envuelta en llamas espectrales que le causan un dolor abrasador por lo que debe realizar una tirada de salvación de Constitución. Sufrirá 2d10 de daño radiante si falla la tirada o la mitad del daño si la supera. Un cambiaformas hace su tirada de salvación con desventaja. Además si fracasa vuelve inmediatamente a su forma original y no puede cambiar de nuevo hasta que salga de la luz del conjuro. En los turnos posteriores al lanzamiento puedes usar una acción para mover el conjuro hasta 60 pies en cualquier dirección.",
      damage: "Nivel 2: 2d10, Nivel 3: 3d10, Nivel 4: 4d10, Nivel 5: 5d10, Nivel 6: 6d10, Nivel 7: 7d10, Nivel 8: 8d10, Nivel 9: 9d10"
    },
    {
      name: "Mover la tierra",
      level: 6,
      school: "Transmutación",
      classes: [
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 2 horas",
      description: "Elige una zona de terreno cuadrada de hasta 40 pies de lado dentro del alcance. Eres capaz de cambiar la forma de la tierra, arena o arcilla en la zona como desees hasta el final de la duración del conjuro. Puedes subir o bajar la elevación de la zona, crear o llenar una zanja, construir o derribar un muro, o crear un pilar. La magnitud de estos cambios no puede exceder la mitad de la mayor de las dimensiones del área. De esta manera, si afectas a un cuadrado de 40 pies de lado, podrías crear un pilar de hasta 20 pies de altura, subir o bajar la elevación del cuadrado hasta 20 pies, cavar una zanja de 20 pies de profundidad, etc. Estos cambios tardan 10 minutos en completarse. Cada 10 minutos que te concentres en el conjuro puedes elegir una nueva zona de terreno a la que afectar. Debido a que la transformación ocurre lentamente, las criaturas que estuvieran en el área no se verán atrapadas o heridas por el movimiento de tierras. Este conjuro no puede manipular la piedra, ya sea natural o en forma de estructura. Las rocas y construcciones se mueven para adaptarse al nuevo terreno. Si la manera en que modificas el terreno hace inestable una construcción, esta podría derrumbarse. De igual forma, este conjuro tampoco afecta al crecimiento de la vegetación. Pero la tierra desplazada arrastra consigo cualquier planta con ella."
    },
    {
      name: "Indetectable",
      level: 3,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Explorador",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "8 horas",
      description: "Escondes a un objetivo al que puedas tocar de la magia de adivinación hasta el final de la duración del conjuro. El objetivo puede ser una criatura voluntaria, un objeto o un lugar que no mida más de 10 pies en ninguna dimensión. No podrá ser objetivo de ninguna magia de adivinación o ser percibido mediante sensores mágicos de escudriñamiento."
    },
    {
      name: "Pasar sin Rastro",
      level: 2,
      school: "Abjuración",
      classes: [
        "Druida",
        "Guardabosques"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 hora",
      description: "Radias a tu alrededor un velo de sombras y silencio que impide que tú y tus compañeros seáis detectados. Hasta el final de la duración del conjuro cada criatura que elijas a 30 pies de ti (incluido tú) tiene un bonificador de +10 a pruebas de Destreza (Sigilo) y no puede ser rastreada excepto por medios mágicos. Una criatura que recibe este bonificador no deja huellas ni rastro de su paso."
    },
    {
      name: "Pasamuros",
      level: 5,
      school: "Transmutación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "1 hora",
      description: "Se abre un pasadizo en un punto que puedas ver dentro del alcance sobre una superficie de madera, yeso, o piedra (como un muro, pared o suelo). Eliges las dimensiones de la apertura: hasta 5 pies de ancho, 8 de alto y 20 de profundidad. El pasadizo no crea inestabilidad en la estructura circundante. Cuando desaparezca, cualquier criatura u objeto todavía dentro será expulsado de manera inofensiva a un espacio libre cerca de la superficie sobre la que lanzaste el conjuro."
    },
    {
      name: "Terror abyecto",
      level: 4,
      school: "Ilusión",
      classes: [
        "Hechicero"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Sirviéndote de los miedos más abyectos de un grupo de criaturas creas en su mente seres ilusorios que solo ellas pueden ver. Todas las criaturas en una esfera de 30 pies centrada en un punto de tu elección dentro del alcance deben hacer una tirada de salvación de Sabiduría. Aquellas que fallen quedan asustadas hasta el final de la duración del conjuro. La ilusión se nutre de los terrores más profundos del objetivo, manifestando sus peores pesadillas como una amenaza implacable. Al final de cada uno de sus turnos, mientras no haya finalizado el conjuro, la criatura deberá tener éxito en una tirada de salvación de Sabiduría o sufrir 4d10 de daño psíquico. Si tiene éxito, el conjuro acaba para esa criatura.",
      damage: "Nivel 4: 4d10"
    },
    {
      name: "Corcel Fantasma",
      level: 3,
      school: "Ilusión",
      classes: [
        "Hechicero"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 minuto",
      range: "30 pies",
      duration: "1 hora",
      description: "Una criatura de tamaño Grande con aspecto equino aparece en el suelo en un espacio libre de tu elección que puedas ver dentro del alcance. Tú decides la apariencia de la criatura, pero estará equipada con silla de montar, bocado y bridas. Cualquier equipo creado por el conjuro se desvanecerá si se aleja más de 10 pies de ella. Hasta el final de la duración del conjuro, tú o una criatura de tu elección podéis montar el corcel. Este tiene el perfil de un caballo de monta, excepto que su velocidad es de 100 pies y puede viajar 10 millas en una hora, 13 a ritmo rápido. Cuando el conjuro acaba, el corcel se desvanece gradualmente, dando al jinete 1 minuto para desmontar. El conjuro acaba si la criatura recibe cualquier tipo de daño o si utilizas una acción para terminar el conjuro."
    },
    {
      name: "Aliado Planar",
      level: 6,
      school: "Conjuración",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "10 minutos",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Suplicas la ayuda de una entidad de otro mundo. Debe ser una entidad que conozcas: un dios, un primordial, un príncipe demonio u otro ser de poderes cósmicos. Para ayudarte enviará un celestial, elemental o infernal leal a ti, haciendo que aparezca en un espacio desocupado dentro del alcance. Si conoces el nombre específico de una criatura, puedes pronunciar su nombre al lanzar el conjuro para solicitar a esa criatura en concreto, aunque aun así podrías recibir otra criatura diferente (a elección del DM). Cuando la criatura se presenta no está bajo los efectos de ninguna obligación que le haga comportarse de una manera determinada. Puedes pedirle que lleve a cabo un servicio a cambio de un pago, pero no está obligada a hacerlo. La tarea solicitada puede ser simple (como \"llévanos volando a través del abismo\" o \"ayúdanos en una batalla\") o compleja (como \"espía a nuestros enemigos\" o \"protégenos durante nuestra incursión en la mazmorra\"). Debes ser capaz de comunicarte con la criatura para contratar sus servicios. El pago puede tomar formas muy variadas. Un celestial podría requerir una cuantiosa donación de oro u objetos mágicos a un templo aliado, mientras que un infernal podría requerir un sacrificio de un ser vivo o cierto tipo de regalo. Algunas criaturas podrían pedirte que lleves a cabo una misión a cambio de sus servicios. Como regla general, una tarea que pueda ser medida en minutos cuesta 100 po por minuto. Una tarea medida en horas cuesta 1.000 po por hora. Finalmente, una tarea medida en días (hasta 10) cuesta 10.000 po por día. El DM puede ajustar estos precios en función de las circunstancias en las que se lance el conjuro. Si la tarea se ajusta a los valores de la criatura, el pago podría ser reducido a la mitad o incluso condonado. Las tareas sin peligro cuestan normalmente la mitad, mientras que las que sean especialmente peligrosas pueden requerir una donación mayor. Sería raro que alguna criatura aceptara una tarea que le pareciera suicida. Después de completar su misión o cuando se acabe el tiempo de servicio contratado, la criatura volverá a su plano nativo tras informarte, si esto es posible y apropiado a la tarea. Si sois incapaces de alcanzar un acuerdo por el servicio, la criatura vuelve inmediatamente a su plano natal. Una criatura reclutada para unirse a tu grupo cuenta como un miembro más, recibiendo su parte completa de los puntos de experiencia."
    },
    {
      name: "Atadura Planar",
      level: 5,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "60 pies",
      duration: "24 horas",
      description: "Con este conjuro intentas obligar a un celestial, elemental, feérico o infernal a servirte. La criatura debe estar dentro del alcance durante toda la duración del lanzamiento del conjuro (típicamente se invoca a la criatura en el centro de un círculo mágico invertido para evitar que escape mientras se lanza el conjuro). Al finalizar el lanzamiento, el objetivo debe hacer una tirada de salvación de Carisma. Si falla, queda atado obligado a servirte hasta el final de la duración del conjuro. Si la criatura fue invocada o creada por otro conjuro, la duración de ese último se extiende hasta igualar la de este conjuro. El objetivo atado debe obedecer tus órdenes lo mejor que pueda. Puedes pedirle que te acompañe en una aventura, que vigile un sitio o que entregue un mensaje. La criatura seguirá las instrucciones al pie de la letra pero si es hostil hacia ti, intentará retorcer tus palabras para conseguir sus propios objetivos. Si cumple totalmente tus órdenes antes de que acabe el conjuro, viajará hasta donde estés para informarte siempre y cuando estéis en el mismo plano de existencia. Si estás en otro plano, volverá al sitio donde la ataste y se quedará ahí hasta que el conjuro termine."
    },
    {
      name: "Desplazamiento entre planos",
      level: 7,
      school: "Conjuración",
      classes: [
        "Clérigo",
        "Druida",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Tú y hasta ocho criaturas voluntarias os tomáis las manos en círculo y sois transportados a un plano de existencia diferente. Puedes especificar el destino deseado en términos generales como la Ciudad de Bronce en el Plano Elemental de Fuego o el palacio de Dispater en el segundo nivel de los Nueve Infiernos y aparecéis en esa localización o en un lugar próximo a ella. Si estás intentando llegar a la Ciudad de Bronce, por ejemplo, podrías aparecer en la calle de Acero, delante de la Puerta de las Cenizas, o al otro lado del Mar de Fuego mirando a la ciudad, según decida el DM. De modo alternativo, si conoces la secuencia de sellos de un círculo de teletransportación en otro plano de existencia, este conjuro puede llevarte hasta él. Si en el círculo de teletransportación no caben todas las criaturas que has transportado, aparecerán en los espacios desocupados más cercanos a dicho círculo. Puedes usar este conjuro para exiliar a una criatura no voluntaria a otro plano. Haz un ataque de conjuro cuerpo a cuerpo contra una criatura de tu elección dentro de tu alcance. Si impactas, el objetivo debe hacer una tirada de salvación de Carisma. Si fracasa, es transportada a una localización aleatoria del plano de existencia que elijas. Una criatura transportada de esta manera debe encontrar su propio camino de vuelta a tu plano actual."
    },
    {
      name: "Crecimiento Vegetal",
      level: 3,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción u 8 horas",
      range: "150 pies",
      duration: "Instantáneo",
      description: "Este conjuro infunde vitalidad en las plantas de un área determinada. Hay dos posibles maneras de emplear este conjuro que proporcionará beneficios a corto o a largo plazo. Si lanzas el conjuro utilizando 1 acción elige un punto que puedas ver dentro del alcance. Todas las plantas en un radio de 100 pies centrado en ese punto se vuelven gruesas y muy frondosas. Cualquier criatura que atraviese esa zona debe emplear 4 pies de movimiento por cada pie que quiera moverse. Puedes excluir una o más áreas de cualquier tamaño de la zona afectada por el conjuro. Si lanzas este conjuro durante 8 horas enriquecerás la tierra. Todas las plantas en un círculo de media milla de radio centrado en un punto dentro del alcance quedan enriquecidas y potenciadas durante 1 año. Producirán el doble de alimentos para la próxima cosecha."
    },
    {
      name: "Rociada Venenosa",
      level: 0,
      school: "Conjuración",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "10 pies",
      duration: "Instantáneo",
      description: "Extiendes tu mano hacia una criatura que puedas ver dentro del alcance y la fumigas con una nube de gas venenoso que sale de la palma de tu mano. Deberá tener éxito en una tirada de salvación de Constitución o sufrirá 1d12 de daño de veneno. El daño del conjuro aumenta en 1d12 cuando alcanzas el nivel 5 (2d12), nivel 11 (3d12) y nivel 17 (4d12)."
    },
    {
      name: "Polimorfar",
      level: 4,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 hora",
      description: "Este conjuro transforma a una criatura que puedas ver dentro del alcance en una nueva forma. Una criatura no voluntaria puede hacer una tirada de salvación de Sabiduría para evitar la transformación. El conjuro no tendrá efecto en un cambiaformas o en una criatura con 0 puntos de golpe. La transformación se mantiene hasta el final de la duración del conjuro o hasta que el objetivo muera o sea reducido a 0 puntos de golpe. La nueva forma puede ser la de cualquier bestia cuyo valor de desafío sea igual o menor que el del objetivo (o igual o menor que el nivel del objetivo si este no tiene un valor de desafío). Reemplaza el perfil del objetivo por el perfil de la bestia elegida incluyendo las puntuaciones de característica mentales. Únicamente mantendrá su alineamiento y personalidad. También pasará a tener los puntos de golpe de su nueva forma. Cuando revierta a su forma normal volverá a poseer los puntos de golpe que tuviera antes de la transformación. Si la transformación se rompe al quedar su nueva forma reducida a 0 puntos de golpe cualquier daño sobrante se aplica a la forma normal. Si este daño sobrante no reduce la forma normal de la criatura a 0 puntos de vida no cae inconsciente. Las acciones de la criatura quedan limitadas por la naturaleza de su nueva forma y tampoco puede hablar, lanzar conjuros o realizar cualquier acción que requiera del habla o uso de las manos. El equipamiento del objetivo se funde con la nueva forma. El objetivo no puede activar, blandir o beneficiarse de su equipamiento de ninguna manera."
    },
    {
      name: "Palabra de poder: matar",
      level: 9,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Pronuncias una palabra de poder capaz de matar instantáneamente a una criatura que puedas ver dentro del alcance. Si la criatura elegida posee 100 puntos de golpe o menos muere. Si no es así el conjuro no tiene efecto."
    },
    {
      name: "Palabra de poder: aturdir",
      level: 8,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Pronuncias una palabra de poder capaz de aturdir la mente de una criatura que puedas ver dentro del alcance dejándola estupefacta. Si la criatura elegida posee 150 puntos de golpe o menos queda aturdida. Si no es así, el conjuro no tiene efecto. Al final de cada uno de sus turnos, el objetivo puede realizar una tirada de salvación de Constitución. Si tiene éxito, este efecto aturdidor termina."
    },
    {
      name: "Plegaria de curación",
      level: 2,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V"
      ],
      castingTime: "10 minutos",
      range: "30 pies",
      duration: "Instantáneo",
      description: "Hasta seis criaturas de tu elección que puedas ver dentro del alcance recuperan cada una tantos puntos de golpe como 2d8 + tu modificador por aptitud mágica. Este conjuro no afecta a muertos vivientes o autómatas."
    },
    {
      name: "Prestidigitación",
      level: 0,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "10 pies",
      duration: "Hasta 1 hora",
      description: "Este conjuro es un truco mágico menor con el que practican los lanzadores de conjuros inexpertos. Produces uno de los siguientes efectos mágicos dentro del alcance: Creas un efecto sensorial instantáneo e inofensivo como una lluvia de chispas, una sutil ráfaga de viento, leves notas musicales, o un olor extraño. Apagas o enciendes de forma instantánea una vela, antorcha u hoguera pequeña. Limpias o ensucias de forma instantánea un objeto de hasta 1 pie cúbico. Enfrías, calientas o das sabor a un material inerte de hasta 1 pie cúbico durante 1 hora. Haces aparecer una mancha de color, una pequeña marca o un símbolo en un objeto o superficie durante 1 hora. Creas un abalorio no mágico o una imagen ilusoria que cabe en tu mano y que dura hasta el final de tu próximo turno. Si lanzas este conjuro varias veces, puedes mantener hasta tres de sus efectos no instantáneos activos a la vez. Para finalizar cualquiera de ellos deberás emplear una acción."
    },
    {
      name: "Rociada Prísmatica",
      level: 7,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Ocho rayos surgen de tu mano en un fogonazo. Cada uno es de un color distinto y tiene un efecto y propósito diferente. Todas las criaturas en un cono de 60 pies deben hacer una tirada de salvación de Destreza. Para cada objetivo tira un d8 para determinar qué rayo le afecta. ***1. Rojo.*** Sufrirá 10d6 de daño de fuego si falla la tirada de salvación o la mitad del daño si la supera. ***2. Naranja.*** Sufrirá 10d6 de daño de ácido si falla la tirada de salvación o la mitad del daño si la supera. ***3. Amarillo.*** Sufrirá 10d6 de daño de relámpago si falla la tirada de salvación o la mitad del daño si la supera. ***4. Verde.*** Sufrirá 10d6 de daño de veneno si falla la tirada de salvación o la mitad del daño si la supera. ***5. Azul.*** Sufrirá 10d6 de daño de frío si falla la tirada de salvación o la mitad del daño si la supera. ***6. Añil.*** Si falla la tirada de salvación el objetivo queda apresado. Al final de cada uno de sus turnos el objetivo debe realizar otra tirada de salvación de Constitución. El efecto termina si la criatura tiene éxito tres veces en esta tirada. Si fracasa tres veces queda convertida en piedra y por tanto bajo el estado 'petrificado'. Los éxitos y fallos no tienen por qué ser consecutivos. Lleva la cuenta de ambos hasta que tengas tres del mismo tipo. ***7. Violeta.*** Si falla la tirada de salvación el objetivo queda cegado. Al principio de tu próximo turno el objetivo debe realizar una tirada de salvación de Sabiduría. Si tiene éxito en la tirada la ceguera termina. Si falla esta segunda ***8. Special.*** El objetivo es alcanzado por dos rayos. Tira dos veces más, ignorando cualquier 8.",
      damage: "Nivel 7: 10d6"
    },
    {
      name: "Muro Prismático",
      level: 9,
      school: "Abjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "10 minutos",
      description: "Un plano titilante y multicolor forma un muro opaco (de hasta 90 pies de largo, 30 de alto y 1 pulgada de ancho) centrado en un punto que puedas ver dentro del alcance. Alternativamente puedes dar al plano la forma de una esfera de hasta 30 pies de diámetro centrada en un punto de tu elección dentro del alcance. El muro permanece en este lugar hasta el final de la duración del conjuro. Si lo colocas de tal manera que atraviesa el espacio ocupado por una criatura el conjuro falla y pierdes tanto la acción como el espacio de conjuro. El muro emite luz brillante hasta a 100 pies y proporciona luz tenue a otros 100 pies de distancia. Tú y las criaturas que elijas en el momento de lanzar el conjuro podréis pasar y permanecer cerca del muro sin ser dañadas. Si cualquier otra criatura que pueda ver el muro se acerca a menos de 20 pies o comienza su turno a esa distancia debe tener éxito en una tirada de salvación de Constitución o quedará cegada durante 1 minuto. El muro está formado por siete capas, cada una de un color distinto. Cuando una criatura intente meter la mano o atravesar el muro lo hará capa a capa enfrentándose a cada una sucesivamente. Para cada una deberá realizar una tirada de salvación de Destreza o quedará afectada por las propiedades de esa capa tal y como se describe más abajo. El muro puede ser destruido capa a capa en orden de rojo a violeta de una manera específica para cada una. Cuando una capa ha sido eliminada seguirá estando destruida hasta el final de la duración del conjuro. Campo antimagicia no tiene efecto en el muro y disipar magia solo puede afectar a la capa violeta. 1. Rojo. La criatura sufrirá 10d6 de daño de fuego si falla la tirada o la mitad del daño si la supera. Mientras esta capa siga en pie los ataques a distancia no mágicos no pueden atravesar el muro. La capa puede ser destruida si se le infligen 25 de daño de frío o más. 2. Naranja. La criatura sufrirá 10d6 de daño de ácido si falla la tirada o la mitad del daño si la supera. Mientras esta capa siga en pie los ataques a distancia mágicos no pueden atravesar el muro. La capa puede ser destruida por un viento fuerte. 3. Amarillo. La criatura sufrirá 10d6 de daño de relámpago si falla la tirada o la mitad del daño si la supera. La capa puede ser destruida si se le infligen 60 de daño de fuerza o más. 4. Verde. La criatura sufrirá 10d6 de daño de veneno si falla la tirada o la mitad del daño si la supera. La capa podrá ser destruida mediante el conjuro pasamuros u otro conjuro de nivel igual o superior que pueda abrir un portal en una superficie sólida. 5. Azul. La criatura sufrirá 10d6 de daño de frío si falla la tirada o la mitad del daño si la supera. La capa puede ser destruida si se le infligen 25 de daño de fuego o más. 6. Añil. Si falla la tirada la criatura queda apresada. Al final de cada uno de sus turnos debe realizar otra tirada de salvación de Constitución. El efecto termina si la criatura tiene éxito tres veces en esta tirada. Si fracasa tres veces queda convertida en piedra y por tanto bajo el estado 'petrificado'. Los éxitos y fallos no tienen por qué ser consecutivos. Lleva la cuenta de ambos hasta que tengas tres del mismo tipo. Mientras la capa añil siga en pie no se podrán lanzar conjuros a través del muro. Para destruir esta capa es necesario iluminarla con lu"
    },
    {
      name: "Sanctórum Privado de Mordenkainen",
      level: 4,
      school: "Abjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "120 pies",
      duration: "24 horas",
      description: "Aseguras mágicamente una zona dentro del alcance. Su volumen es el de un cubo de entre 5 y 100 pies de lado. La protección permanece hasta el final de la duración del conjuro o hasta que utilices una acción para finalizarlo. Cuando lanzas este conjuro decides qué tipo de cobertura provee, eligiendo cualquiera o todas de las siguientes propiedades: - El sonido no puede atravesar la barrera situada en el perímetro de la zona. - La barrera toma una apariencia de niebla oscura impidiendo ver a través de ella (incluyendo visión en la oscuridad). - Los sensores creados por conjuros de adivinación no pueden ser creados dentro de la zona protegida ni pasar a través de la barrera del perímetro. - Las criaturas en la zona no pueden ser objetivo de conjuros de adivinación. - Nada puede entrar o salir de la zona mediante teletransportación. - El viaje interplanar está bloqueado en la zona. Lanzar este conjuro en el mismo lugar todos los días durante un año hace que el efecto sea permanente."
    },
    {
      name: "Crear Llama",
      level: 0,
      school: "Conjuración",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "10 minutos",
      description: "Aparece en tu mano una llama parpadeante. Esta permanece hasta el final de la duración del conjuro y no te daña ni a ti ni a tu equipo. La llama emite luz brillante en un radio de 10 pies y luz tenue 10 pies más allá. El conjuro termina si lo lanzas de nuevo o si utilizas una acción para finalizarlo. También puedes atacar con la llama pero esto termina el conjuro. Cuando lanzas este conjuro o como acción en un turno posterior puedes arrojar la llama a una criatura hasta a 30 pies de ti. Haz un ataque de conjuro a distancia. Si impactas, el objetivo recibe 1d8 de daño de fuego. El daño del conjuro aumenta en 1d8 cuando alcanzas nivel 5 (2d8), nivel 11 (3d8) y nivel 17 (4d8)."
    },
    {
      name: "Ilusión Programada",
      level: 6,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Hasta que sea disipado",
      description: "Creas dentro del alcance una ilusión de un objeto, una criatura o cualquier otro fenómeno visible que se activa cuando se da una condición específica. Hasta ese momento la ilusión es imperceptible. Al lanzar el conjuro decides cómo se comporta y qué sonidos produce la ilusión, que no podrá ser mayor a un cubo de 30 pies. El comportamiento indicado puede durar hasta 5 minutos. Cuando la condición especificada ocurre, la ilusión aparece de golpe y actúa según el comportamiento pedido. Una vez que la actuación ha terminado, la ilusión desaparece y queda latente durante 10 minutos. Después de este tiempo, puede ser activada de nuevo. Las circunstancias de activación pueden ser tan generales o detalladas como quieras, pero deben estar basadas en condiciones visuales o auditivas que ocurran a 30 pies o menos del objeto. Por ejemplo, podrías crear una ilusión de ti mismo que aparezca y avise a aquellos que intenten abrir una puerta con trampa o hacer que la ilusión solo se active cuando una criatura diga la frase o palabra correcta. La interacción física con la imagen revela que es una ilusión, ya que las cosas la atraviesan. Si una criatura utiliza su acción para examinar la imagen, puede determinar que es una ilusión si tiene éxito en una prueba de Inteligencia (Investigación) cuya CD es tu salvación de conjuros. Si la criatura descubre que la imagen es una ilusión, podrá ver a través de ella y los sonidos que produzca le sonarán huecos."
    },
    {
      name: "Proyectar Imagen",
      level: 7,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "500 millas",
      duration: "Concentración hasta 1 día",
      description: "Creas una copia ilusoria de ti mismo que permanece hasta el final de la duración del conjuro. Puedes hacerla aparecer en cualquier localización dentro del alcance que hayas visto antes, independientemente de los obstáculos que pueda haber entre ella y tu posición actual. La ilusión se ve y suena como tú pero es intangible. El conjuro acaba si esta recibe cualquier tipo de daño. Puedes utilizar tu acción para mover la ilusión hasta el doble de tu velocidad y hacerla hablar, hacer gestos o comportarse como quieras. Imitará tus maneras perfectamente. Eres capaz de ver a través de sus ojos y oír a través de sus oídos como si estuvieras donde está ella. En cada uno de tus turnos como acción adicional, puedes pasar de usar sus sentidos a los tuyos o viceversa. Mientras estés usando sus sentidos, quedas cegado y ensordecido respecto a tus propios sentidos. La interacción física con la imagen revela que es una ilusión, ya que las cosas la atraviesan. Si una criatura utiliza su acción para examinar la imagen, puede determinar que es una ilusión si tiene éxito en una prueba de Inteligencia (Investigación) cuya CD es tu salvación de conjuros. Si la criatura descubre que la imagen es una ilusión, podrá ver a través de ella y los sonidos que produzca le sonarán huecos."
    },
    {
      name: "Protección contra energía",
      level: 3,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Druida",
        "Explorador",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración hasta 1 hora",
      description: "Tocas a una criatura voluntaria. Hasta el final de la duración del conjuro esa criatura tiene resistencia a un tipo de daño de tu elección: ácido, frío, fuego, relámpago o trueno."
    },
    {
      name: "Protección contra el bien y el mal",
      level: 1,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Paladín",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración hasta 10 minutos",
      description: "Hasta el final de la duración del hechizo, una criatura voluntaria que toques queda protegida contra ciertos tipos de criaturas: aberraciones celestiales, elementales, feéricos, infernales y muertos vivientes. Esta protección proporciona varios beneficios. Las criaturas de los tipos indicados tienen desventaja en tiradas de ataque contra el objetivo. Este tampoco podrá ser hechizado, asustado o poseído por ellas. Si el objetivo ya estaba hechizado, asustado o poseído por una criatura de este tipo, tendrá ventaja en cualquier tirada de salvación subsiguiente contra estos efectos."
    },
    {
      name: "Protección contra Veneno",
      level: 2,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Druida",
        "Paladín",
        "Explorador"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "1 hora",
      description: "Tocas a una criatura. Si está envenenada neutralizas el veneno. Si está afectada por varios venenos distintos neutralizas uno que sepas que está activo o uno al azar. Hasta el final de la duración del conjuro el objetivo tiene ventaja en tiradas de salvación para evitar ser envenenado y resistencia al daño de veneno."
    },
    {
      name: "Purificar Comida y Bebida",
      level: 1,
      school: "Transmutación",
      classes: [
        "Clérigo",
        "Druida",
        "Paladín"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "10 pies",
      duration: "Instantáneo",
      description: "Purificas y libras de todo veneno y enfermedad la comida y bebida no mágica que esté dentro de una esfera de 5 pies de radio centrada en un punto de tu elección dentro del alcance."
    },
    {
      name: "Alzar a los Muertos",
      level: 5,
      school: "Nigromancia",
      classes: [
        "Bardo",
        "Clérigo",
        "Paladín"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "Toque",
      duration: "Instantáneo",
      description: "Devuelves a una criatura fallecida a la vida siempre y cuando no haya estado muerta más de 10 días. Si el alma de la criatura tiene la libertad y la voluntad de reunirse con su cuerpo, vuelve a la vida con 1 punto de golpe. Este conjuro también neutraliza cualquier veneno y cura cualquier enfermedad no mágica que afligiera a la criatura en el momento de su muerte. Sin embargo, este conjuro no elimina enfermedades mágicas, maldiciones, o efectos similares; si no se eliminan antes del lanzamiento de este conjuro, entrarán en acción cuando la criatura vuelva a la vida. El conjuro no puede devolver a la vida a un muerto viviente. Todas las heridas letales quedarán cerradas, pero no se restablecen miembros o partes del cuerpo que falten. Si la criatura no dispone de partes del cuerpo u órganos necesarios para su supervivencia (como su cabeza, por ejemplo) el conjuro fallará automáticamente. Volver de entre los muertos es una dura experiencia. El objetivo tendrá un penalizador de -4 a todas las tiradas de ataque, tiradas de salvación y pruebas de característica. Cada vez que complete un descanso largo, ese penalizador se reducirá en 1 hasta que desaparezca al llegar a 0."
    },
    {
      name: "Rayo Debilitador",
      level: 2,
      school: "Nigromancia",
      classes: [
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Un rayo negro de energía debilitante surge de tu dedo hacia una criatura que se encuentre dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, hasta el final del conjuro el objetivo solo hará la mitad del daño en ataques con arma que utilicen Fuerza. Al final de cada uno de sus turnos, puede realizar una tirada de salvación de Constitución. Si tiene éxito, el efecto del conjuro termina."
    },
    {
      name: "Rayo de Escarcha",
      level: 0,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Lanzas un rayo helado de luz blanquiazul hacia una criatura de tu elección que se encuentre dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, el objetivo sufre 1d8 de daño de frío y su velocidad queda reducida en 10 pies hasta el comienzo de tu próximo turno. El daño del conjuro aumenta en 1d8 cuando alcanzas nivel 5 (2d8), nivel 11 (3d8), y nivel 17 (4d8)."
    },
    {
      name: "Regenerar",
      level: 7,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Toque",
      duration: "1 hora",
      description: "Tocas a una criatura, estimulando su capacidad de curación natural. Recupera 4d8+15 puntos de golpe. Además, recuperará 1 punto de golpe al principio de cada uno de sus turnos (10 puntos de golpe por minuto) hasta el final de la duración del conjuro. Los miembros cercenados del objetivo (dedos, piernas, cola, etc.), si los tuviera, crecen de nuevo en 2 minutos. Si tienes el miembro separado y lo presionas contra el muñón, el conjuro hace que se reintegre inmediatamente."
    },
    {
      name: "Reencarnar",
      level: 5,
      school: "Transmutación",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "Toque",
      duration: "Instantáneo",
      description: "Tocas a un humanoide muerto o parte de sus restos. Si esta criatura no ha estado muerta más de 10 días, el conjuro crea un nuevo cuerpo adulto para ella y conmina al alma a entrar en ese cuerpo. Si el alma del objetivo no es libre o no quiere entrar, el conjuro fallará. La magia fabrica un nuevo cuerpo para que sea habitado por la criatura, lo que probablemente haga que su raza cambie. El DJ lanza 1d100 y consulta en la siguiente tabla para determinar qué forma adoptará la criatura al ser devuelta a la vida. También puedes elegir una forma concreta en vez de tirar. | d100 | Raza | |---|---| | 01-04 | Dracónido | | 05-13 | Enano de las colinas | | 14-21 | Enano de las montañas | | 22-25 | Elfo oscuro (drow) | | 26-34 | Elfo alto | | 35-42 | Elfo de los bosques | | 43-46 | Gnomo de los bosques | | 47-52 | Gnomo de las rocas | | 53-56 | Semielfo | | 57-60 | Semiorco | | 61-68 | Mediano piesligeros | | 69-76 | Mediano fornido | | 77-96 | Humano | | 97-00 | Tiefling | La criatura reencarnada recuerda su vida y experiencias anteriores. Mantiene las capacidades que tuviera en su forma original, con la salvedad de que cambia su raza anterior por la nueva con sus correspondientes atributos raciales."
    },
    {
      name: "Levantar Maldición",
      level: 3,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Paladín",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Tu toque levanta todas las maldiciones que afecten a una criatura u objeto. Si el objetivo es un objeto mágico maldito, la maldición permanecerá pero este conjuro rompe la sintonización del objeto con el dueño, permitiendo a este quitárselo o deshacerse de él."
    },
    {
      name: "Esfera Elástica de Otiluke",
      level: 4,
      school: "Evocación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Una esfera de fuerza destellante encierra a una criatura u objeto de tamaño Grande o menor dentro del alcance. Una criatura no voluntaria puede hacer una tirada de salvación de Destreza. Si falla quedará encerrada hasta el final de la duración del conjuro. Nada (ni objetos físicos, energía u otros efectos de conjuro) puede atravesar la barrera hacia dentro o hacia fuera, pero una criatura que esté dentro de la esfera puede respirar con normalidad. La esfera es inmune a todo el daño. Además, una criatura u objeto albergada en su interior no puede ser dañado por ataques o efectos cuyo origen sea externo a la esfera, como tampoco puede una criatura situada dentro de la esfera dañar a algo en el exterior. La esfera no pesa nada y es del tamaño justo para contener a la criatura u objeto. Una criatura encerrada puede utilizar su acción para empujar la esfera desde dentro, haciéndola rodar a una velocidad máxima que será la mitad de la velocidad de la criatura. De la misma forma, el globo puede ser levantado y movido por otras criaturas. Un conjuro de desintegrar que tenga como objetivo el globo lo destruirá sin dañar nada albergado dentro del mismo."
    },
    {
      name: "Resistencia",
      level: 0,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración, hasta 1 minuto",
      description: "Tocas a una criatura voluntaria. Una sola vez antes de que termine el conjuro, el objetivo puede tirar 1d4 y añadir el resultado a una tirada de salvación de su elección. Puede tirar el dado antes o después de conocer el resultado de la tirada. Hacer esto da por finalizado el conjuro."
    },
    {
      name: "Resurrección",
      level: 7,
      school: "Nigromancia",
      classes: [
        "Bardo",
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "Toque",
      duration: "Instantáneo",
      description: "Tocas a una criatura que lleve muerta menos de un siglo, que no haya fallecido de edad avanzada y que no sea un muerto viviente. Si su alma es libre y lo desea, el objetivo vuelve a la vida con todos sus puntos de golpe. Este conjuro también neutraliza cualquier veneno y cura cualquier enfermedad no mágica que afligiera a la criatura en el momento de su muerte. Sin embargo, no elimina enfermedades mágicas, maldiciones o efectos similares. Si estas no se eliminan antes del lanzamiento de este conjuro, entrarán en acción cuando la criatura vuelva a la vida. Todas las heridas letales quedarán cerradas pero no se restablecen miembros o partes del cuerpo que falten. Volver de entre los muertos es una experiencia terrible. El objetivo tendrá un penalizador de -4 a todas las tiradas de ataque, tiradas de salvación y pruebas de característica. Cada vez que complete un descanso largo, ese penalizador se reducirá en 1, hasta que desaparezca al llegar a 0. Lanzar este conjuro para devolver la vida a una criatura que ha estado muerta durante un año o más te supone un gran esfuerzo. Hasta que completes un descanso largo, no podrás lanzar más conjuros y tendrás desventaja en todas las tiradas de ataque, pruebas de característica y tiradas de salvación."
    },
    {
      name: "Invertir la Gravedad",
      level: 7,
      school: "Transmutación",
      classes: [
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "100 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Este conjuro invierte la gravedad en un área cilíndrica de 50 pies de radio y 100 de altura centrada en un punto que se encuentre dentro del alcance. Cuando lances este conjuro todas las criaturas y objetos que no estén anclados de alguna manera al suelo caerán hacia arriba hasta alcanzar la parte superior del área. Una criatura puede realizar una tirada de salvación de Destreza para agarrarse a un objeto fijado al suelo que esté a su alcance lo que le permitirá evitar la caída si tiene éxito en dicha tirada. Si un objeto sólido (como un techo) se interpone en esta caída, los objetos y criaturas en descenso lo golpean como lo harían en una caída normal hacia abajo. Si un objeto o criatura llega a la parte superior del área sin chocarse con nada, permanecerá allí oscilando levemente hasta el final de la duración del conjuro. Cuando llegue ese momento, las criaturas y objetos afectados caen hacia abajo de nuevo."
    },
    {
      name: "Revivir",
      level: 3,
      school: "Conjuración",
      classes: [
        "Clérigo",
        "Paladín"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Tocas a una criatura que haya muerto en el último minuto y esta vuelve a la vida con 1 punto de golpe. Este conjuro no puede devolver a la vida a una criatura que haya muerto de edad avanzada ni puede recuperar miembros perdidos."
    },
    {
      name: "Truco de la cuerda",
      level: 2,
      school: "Transmutación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "1 hora",
      description: "Tocas un segmento de cuerda de hasta 60 pies de longitud. Esto hace que un extremo de la cuerda se alce hasta que toda la cuerda cuelgue de manera perpendicular al suelo. En el extremo superior de la cuerda se abre una entrada mágica a un espacio extradimensional que durará hasta el final del conjuro. Este espacio puede ser alcanzado subiendo por la cuerda hasta su final. En él caben hasta ocho criaturas de tamaño Mediano o más pequeñas. Se puede tirar de la cuerda para meterla en el espacio lo que hace que desaparezca de la vista de aquellos en el exterior. Los ataques y conjuros no pueden cruzar esta entrada al espacio extradimensional en ningún sentido pero los que están dentro podrán ver hacia fuera como si hubiera una ventana de 3 por 5 pies centrada en la cuerda. Cualquier cosa dentro del espacio extradimensional cae al exterior cuando el conjuro termina."
    },
    {
      name: "Llama Sagrada",
      level: 0,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Un fulgor de llamas desciende sobre una criatura que puedas ver dentro del alcance. El objetivo deberá tener éxito en una tirada de salvación de Destreza o sufrirá 1d8 de daño radiante. Además, el objetivo no podrá beneficiarse de cobertura para esta tirada de salvación. El daño del conjuro aumenta en 1d8 cuando alcanzas nivel 5 (2d8), nivel 11 (3d8) y nivel 17 (4d8)."
    },
    {
      name: "Santuario",
      level: 1,
      school: "Abjuración",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción adicional",
      range: "30 pies",
      duration: "1 minuto",
      description: "Proteges de los ataques a una criatura dentro del alcance. Hasta el final de la duración del conjuro cualquier criatura que elija como objetivo de un ataque o un conjuro hostil a la criatura protegida debe realizar antes una tirada de salvación de Sabiduría. Si la falla, la criatura debe elegir un nuevo objetivo o perder el ataque o conjuro. Sin embargo, santuario no salvaguarda a la criatura protegida de efectos de área, como por ejemplo la explosión de una bola de fuego. Por otro lado, si la criatura protegida realiza un ataque o lanza un conjuro que afecta a una criatura enemiga, santuario termina inmediatamente."
    },
    {
      name: "Rayo Abrasador",
      level: 2,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Instantáneo",
      description: "Creas tres rayos de fuego y los diriges contra uno o varios objetivos que se encuentren dentro del alcance. Haz un ataque de conjuro a distancia para cada rayo. Si impactas el objetivo recibe 2d6 de daño de fuego.",
      damage: "Nivel 2: 2d6"
    },
    {
      name: "Escudriñar",
      level: 5,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Clérigo",
        "Druida",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "10 minutos",
      range: "Lanzador",
      duration: "Concentración hasta 10 minutos",
      description: "Puedes ver y oír a una criatura concreta que elijas y esté en tu mismo plano de existencia. El objetivo debe realizar una tirada de salvación de Sabiduría modificada según cuánto sepas sobre la criatura y el tipo de conexión física que tengas con ella. Si el objetivo es consciente de que estás lanzando este conjuro y desea ser observado, puede optar por fallar la tirada de salvación de forma voluntaria. | Conocimiento | Modificador a la Tirada | |---|---| | De oídas (has oído hablar del objetivo) | +5 | | De primera mano (te han presentado o has hablado con el objetivo) | +0 | | Íntimo (conoces muy bien al objetivo) | -5 |  | Conexión | Modificador a la Tirada | |---|---| | Dibujo o retrato | -2 | | Posesión o prenda | -4 | | Parte del cuerpo, mechón de cabello, trozo de uña, o similar | -10 | Si la tirada de salvación tiene éxito, la criatura no se verá afectada y no podrás utilizar este conjuro contra ella de nuevo durante 24 horas. Si la tirada fracasa, el conjuro crea un sensor invisible a 10 pies del objetivo. Puedes ver y oír a través del sensor como si estuvieras allí. El sensor se desplaza con el objetivo, permaneciendo a 10 pies de distancia durante toda la duración del conjuro. Una criatura que pueda ver objetos invisibles percibe el sensor como un orbe luminoso e intangible del tamaño de tu puño. En lugar de seleccionar a una criatura, puedes escoger una localización que hayas visto antes como el objetivo del conjuro. En ese caso, el sensor aparece en esa localización y permanece inmóvil."
    },
    {
      name: "Cofre oculto de Leomund",
      level: 4,
      school: "Conjuración",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Ocultas un cofre y todos sus contenidos en el Plano Etéreo. Debes tocar el cofre y la réplica en miniatura que sirven de componentes materiales para el conjuro. El cofre puede alojar hasta 12 pies cúbicos de materiales inertes (3 pies por 2 pies por 2 pies). Mientras permanezca en el Plano Etéreo puedes utilizar una acción y tocar la réplica para convocarlo. Aparecerá en un espacio desocupado del suelo a 5 pies de ti. Puedes volver a mandarlo al Plano Etéreo empleando una acción y tocando tanto la réplica como el propio cofre. Después de 60 días hay una posibilidad acumulativa del 5 % por día de que los efectos del conjuro terminen. También lo harán si lanzas el conjuro de nuevo, si la réplica del cofre es destruida, o si decides finalizar el conjuro con una acción. Si el conjuro termina y el cofre grande está en el Plano Etéreo, se pierde irremediablemente."
    },
    {
      name: "Ver Invisibilidad",
      level: 2,
      school: "Adivinación",
      classes: [],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "1 hora",
      description: "Hasta el final de la duración del conjuro puedes ver criaturas y objetos invisibles como si fueran visibles así como ver en el Plano Etéreo. Las criaturas y objetos etéreos se mostrarán translúcidos y fantasmales."
    },
    {
      name: "Apariencia",
      level: 5,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "8 horas",
      description: "Este conjuro te permite cambiar la apariencia de cualquier número de criaturas que puedas ver dentro del alcance. Le das a cada una de ellas una apariencia ilusoria nueva. Un objetivo no voluntario puede realizar una tirada de salvación de Carisma y si tiene éxito, no se verá afectado por el conjuro. El conjuro disfraza la apariencia física así como la vestimenta, armas, armadura y equipo. Puedes hacer que cada criatura parezca 1 pie más alta o más baja, y de complexión delgada, gorda o intermedia. No puedes cambiar el tipo de cuerpo, así que debes elegir una forma que tenga la misma configuración de miembros. En el resto de aspectos, la ilusión queda a tu elección. El conjuro permanece hasta el final de la duración del conjuro o hasta que utilices una acción para finalizarla. Los cambios realizados por este conjuro no resisten una inspección física. Por ejemplo, si usas este conjuro para añadir un sombrero a la vestimenta de una criatura, los objetos pasan a través del sombrero y cualquiera que lo toque no sentiría nada o sencillamente notaría el pelo y cabeza. Si utilizas este conjuro para parecer más delgado, la mano de cualquiera que intente tocarte se chocará contigo mientras parece estar aún en el aire. Si una criatura emplea su acción para examinar a un objetivo, puede hacer una prueba de Inteligencia (Investigación) contra tu CD de salvación de conjuros. Si tiene éxito, se da cuenta de que el objetivo está disfrazado."
    },
    {
      name: "Recado",
      level: 3,
      school: "Evocación",
      classes: [
        "Bardo",
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Ilimitado",
      duration: "1 asalto",
      description: "Envías un mensaje corto de veinticinco palabras o menos a una criatura con la que estés familiarizado. El objetivo escucha el mensaje en su mente, te reconoce como el emisor si te conoce, y puede contestar de la misma manera inmediatamente. El conjuro permite que criaturas con una puntuación de Inteligencia de al menos 1 sean capaces de comprender el significado de tu mensaje. Puedes enviarlo a cualquier distancia, incluyendo otros planos de existencia, pero si el objetivo está en un plano distinto al tuyo, hay un 5 % de posibilidades de que el mensaje no llegue a su destino."
    },
    {
      name: "Recluir",
      level: 7,
      school: "Transmutación",
      classes: [],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Hasta que sea disipado",
      description: "Hasta el final de su duración, este conjuro permite que un objeto o criatura voluntaria pueda ser escondido a salvo de cualquier detección. Cuando lanzas el conjuro y tocas al objetivo, este se vuelve invisible y no puede ser objetivo de conjuros de adivinación ni percibido mediante sensores de escudriñamiento creados por conjuros de esta escuela. Si el objetivo es una criatura, cae en un estado de animación suspendida. El tiempo deja de pasar para ella y no envejece. Puedes escoger una condición para que el conjuro acabe. Esta puede ser la que tú quieras pero debe tener lugar o ser visible a 1 milla del objetivo. Algunos ejemplos serían \"después de 1.000 años\" o \"cuando la tarasca despierte\". El conjuro también termina si el objetivo recibe cualquier tipo de daño."
    },
    {
      name: "Polimorfar Verdadero",
      level: 9,
      school: "Transmutación",
      classes: [
        "Druida",
        "Hechicero"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Self",
      duration: "Concentración, hasta 1 hora",
      description: "Eliges a una criatura u objeto no mágico que puedas ver dentro del alcance. Puedes transformar a la criatura en una criatura diferente, o en un objeto o al objeto en una criatura (siempre que nadie esté vistiendo o portando este objeto). La transformación se mantiene hasta el fin de la duración del conjuro, o hasta que el objetivo muera o sea reducido a 0 puntos de vida. Si mantienes tu concentración en el conjuro durante toda su duración, la transformación permanece hasta que sea disipada. El conjuro no afecta a cambiaformas o a criaturas con 0 puntos de vida. Un objetivo que no desee ser afectado puede realizar una tirada de salvación de Carisma, y si tiene éxito, no será afectado por el conjuro. Si conviertes una criatura en otra criatura, la nueva forma puede ser cualquier criatura cuyo valor de desafío sea igual o menor que el del objetivo o igual o menor que el nivel del objetivo si este no posee un valor de desafío. Reemplazas el perfil de estadísticas del objetivo con el de la forma elegida, incluyendo puntuaciones de características mentales, pero mantiene su alineamiento y personalidad. Adquiere los puntos de vida de su nueva forma y, al revertir a su forma normal, regresa a los puntos de vida que tenía antes de la transformación. Si la transformación se termina por quedarse sin puntos de vida, cualquier daño restante se aplica a la forma normal. Si este daño restante no reduce la forma normal de la criatura a 0 puntos de vida, no cae inconsciente. Las acciones de la criatura están limitadas por la naturaleza de su nueva forma y no puede hablar, lanzar conjuros, o realizar cualquier acción que requiera hablar o el uso de las manos, a menos que su nueva forma sea capaz de estas acciones."
    },
    {
      name: "Hacer Añicos",
      level: 2,
      school: "Evocación",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Un repentino y fuerte zumbido, dolorosamente intenso, surge de un punto de tu elección dentro del alcance. Cada criatura en una esfera de 3 metros de radio centrada en ese punto debe realizar una tirada de salvación de Constitución. Una criatura recibe 3d8 puntos de daño por trueno si falla la tirada de salvación, o la mitad de daño si tiene éxito. Una criatura hecha de material inorgánico como piedra, cristal o metal tiene desventaja en esta tirada de salvación. Un objeto no mágico que no se lleve encima también sufre daño si está en el área del hechizo.",
      damage: "Nivel 2: 3d8, Nivel 3: 4d8, Nivel 4: 5d8, Nivel 5: 6d8, Nivel 6: 7d8, Nivel 7: 8d8, Nivel 8: 9d8, Nivel 9: 10d8"
    },
    {
      name: "Escudo",
      level: 1,
      school: "Abjuración",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 reacción",
      range: "Lanzador",
      duration: "1 asalto",
      description: "Aparece una barrera invisible de fuerza que te protege. Hasta el principio de tu siguiente turno tienes un bonificador de +5 a tu CA, incluido contra el ataque que activó el conjuro, y además no recibes ningún daño del conjuro proyectil mágico."
    },
    {
      name: "Escudo de fe",
      level: 1,
      school: "Abjuración",
      classes: [
        "Clérigo",
        "Paladín"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción adicional",
      range: "60 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Un campo titilante envuelve a una criatura de tu elección dentro del alcance otorgándole un bonificador de +2 a la CA hasta el final de la duración del conjuro."
    },
    {
      name: "Bordón mágico",
      level: 0,
      school: "Transmutación",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción adicional",
      range: "Toque",
      duration: "1 minuto",
      description: "La madera de un bastón o garrote que empuñas queda imbuida con el poder de la naturaleza. Hasta el final de la duración del conjuro puedes usar tu aptitud mágica en vez de tu Fuerza para las tiradas de ataque y daño al utilizar esta arma y su dado de daño pasa a ser 1d8. Además, el arma se convierte en mágica si no lo era ya. El conjuro termina si lo lanzas de nuevo o si sueltas el arma."
    },
    {
      name: "Descarga Sobrenatural",
      level: 0,
      school: "Evocación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Instantáneo",
      description: "Lanzas un rayo de energía chisporroteante hacia una criatura de tu elección dentro del alcance. Haz un ataque de conjuro a distancia contra el objetivo. Si impactas, el objetivo recibe 1d10 de daño de fuerza. A niveles superiores, este conjuro crea dos rayos a nivel 5, tres rayos a nivel 11 y cuatro rayos a nivel 17. Puedes dirigir los rayos al mismo o a distintos objetivos. Haz una tirada de ataque separada para cada rayo."
    },
    {
      name: "Silencio",
      level: 2,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Clérigo",
        "Explorador"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Creas una zona esférica de 20 pies de radio con centro en un punto de tu elección que permanece allí hasta el final de la duración del conjuro. El sonido no puede atravesar dicha área ni originarse en su interior. Una criatura u objeto que se halle por completo dentro de la zona esférica es inmune al daño de trueno y si se trata de una criatura, también estará ensordecida. Por ello lanzar un conjuro que precise de un componente verbal es imposible dentro de esta área."
    },
    {
      name: "Imagen Silenciosa",
      level: 1,
      school: "Ilusión",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Creas una imagen de un objeto, una criatura u otro tipo de fenómeno visible cuyas dimensiones no excedan las de un cubo de 15 pies de lado. La imagen aparece en un sitio que puedas ver dentro del alcance y se mantiene hasta el final del tiempo del conjuro. La imagen es solamente visual; no está acompañada de sonido, olor u otros efectos sensoriales. Mientras estés dentro del alcance de la ilusión, puedes utilizar tu acción para moverla a otro sitio dentro de dicho alcance. Al cambiarla de sitio, puedes alterar su apariencia de forma que sus movimientos parezcan naturales. Por ejemplo, si creas la imagen de una criatura y la mueves, puedes alterarla de forma que parezca estar andando. La interacción física con la imagen revela que es una ilusión, ya que las cosas la atraviesan. Si una criatura emplea su acción para examinar la imagen, puede determinar que es una ilusión si tiene éxito en una prueba de Inteligencia (Investigación) cuya CD es tu salvación de conjuros. Si la criatura descubre que la imagen es una ilusión podrá ver a través de ella."
    },
    {
      name: "Simulacro",
      level: 7,
      school: "Ilusión",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "12 horas",
      range: "Toque",
      duration: "Hasta que sea disipado",
      description: "Das forma a un duplicado ilusorio de una bestia o humanoide que deberá permanecer dentro del alcance durante todo el lanzamiento del conjuro. El duplicado es una criatura parcialmente real y hecha de nieve o hielo que puede realizar acciones o ser afectada como una criatura normal. Cuando se forme tendrá el mismo aspecto que el original, pero sin ningún equipo y solo la mitad de sus puntos de golpe máximos. En el resto de aspectos, la ilusión utiliza el perfil de la criatura duplicada. El simulacro se muestra amistoso hacia ti y cualquier criatura que designes. Obedece tus órdenes verbales, moviéndose y actuando de acuerdo a tus deseos y actuando en tu turno en combate. El simulacro no tiene la capacidad de aprender o volverse más poderoso, así que nunca podrá subir de nivel, mejorar sus habilidades, o recuperar espacios de conjuro utilizados. Si el simulacro resulta dañado, puedes repararlo en un laboratorio de alquimista utilizando hierbas y minerales raros con un coste de 100 po por cada punto de golpe recuperado. El simulacro se mantiene hasta que es reducido a 0 puntos de golpe, momento en el cual vuelve a convertirse en nieve o hielo y se derrite inmediatamente. Si lanzas este conjuro de nuevo, destruyes cualquier duplicado que hayas creado antes usando este conjuro y esté activo en este momento."
    },
    {
      name: "Sueño",
      level: 1,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "90 pies",
      duration: "1 minuto",
      description: "Este conjuro sume a criaturas en un sueño mágico. Tira 5d8; podrás afectar a criaturas cuyo total combinado de puntos de golpe sea menor o igual al resultado. Las criaturas a 20 pies de un punto de tu elección dentro del alcance son afectadas en orden ascendente de sus puntos de golpe actuales. Ignora a las criaturas inconscientes. Empezando por la criatura que tenga el menor número de puntos de golpe actuales, cada criatura afectada por este conjuro cae inconsciente hasta el final del conjuro, hasta recibir daño, o hasta que alguien utilice su acción para despertarla. Resta del total los puntos de golpe de cada criatura a la que duermas antes de continuar con la siguiente. Una criatura solo se verá afectada si sus puntos de golpe actuales son menores o iguales al total restante. Los muertos vivientes y las criaturas inmunes a ser hechizadas no se ven afectadas por este conjuro.",
      damage: "Nivel 1: 5d8"
    },
    {
      name: "Lentitud",
      level: 3,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Alteras el tiempo en torno a hasta seis criaturas de tu elección situadas en un cubo de 40 pies de lado dentro del alcance. Cada una de ellas debe superar una tirada de salvación de Sabiduría o quedará afectada hasta el final de la duración del conjuro. La velocidad de una criatura afectada se reduce a la mitad, recibe un penalizador de -2 a la CA y a las tiradas de salvación y no puede llevar a cabo reacciones. En su turno podrá usar una acción o una acción adicional, pero no ambas. Independientemente de sus habilidades u objetos mágicos no podrá hacer más de un ataque cuerpo a cuerpo o a distancia durante su turno. Si la criatura intenta lanzar un conjuro con un tiempo de lanzamiento de 1 acción, tira 1d20. Con un resultado de 11 o más, el conjuro no tiene efecto hasta el próximo turno de la criatura, que debe utilizar la acción de ese turno para completar el conjuro. Si no puede, el conjuro se pierde. Una criatura afectada por este conjuro realiza otra tirada de salvación de Sabiduría al final de cada uno de sus turnos. Si tiene éxito, el efecto termina para ella inmediatamente."
    },
    {
      name: "Piedad con los Moribundos",
      level: 0,
      school: "Nigromancia",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Tocas a una criatura viva con 0 puntos de golpe. El objetivo se estabiliza. Este conjuro no afecta a muertos vivientes o autómatas."
    },
    {
      name: "Hablar con los animales",
      level: 1,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "10 minutos",
      description: "Ganas la capacidad de comprender y comunicarte verbalmente con bestias hasta el final de la duración del conjuro. El conocimiento y conciencia de muchas criaturas está limitado por su inteligencia, pero como mínimo podrán proporcionarte información sobre lugares y monstruos cercanos, incluyendo lo que puedan percibir o hayan percibido en el último día. Es posible que seas capaz de convencer a una bestia de que te haga un pequeño favor, según el criterio del DM."
    },
    {
      name: "Hablar con los muertos",
      level: 3,
      school: "Nigromancia",
      classes: [
        "Bardo",
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "10 pies",
      duration: "10 minutos",
      description: "Otorgas una sombra de vida e inteligencia a un cadáver de tu elección que se encuentre dentro del alcance permitiéndole contestar a tus preguntas. El cadáver debe conservar su boca y no ser un muerto viviente. El conjuro fallará si este cadáver ha sido objetivo del mismo conjuro en los últimos 10 días. Puedes hacer hasta cinco preguntas antes del final del conjuro. El cadáver solo poseerá los mismos conocimientos que en vida, incluyendo idiomas. Las respuestas suelen ser breves, crípticas o repetitivas y el cadáver no tiene obligación de proporcionarte una respuesta veraz si es hostil hacia ti o te reconoce como enemigo. Este conjuro no devuelve el alma de una criatura a la vida, solo el espíritu que la anima. Por tanto, el cadáver no puede adquirir nueva información, entender nada que haya ocurrido desde que murió, o especular sobre eventos futuros."
    },
    {
      name: "Hablar con las Plantas",
      level: 3,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "10 minutos",
      description: "Imbuyes todas las plantas a 30 pies o menos de ti con vivacidad y una conciencia limitada, permitiéndoles comunicarse contigo y seguir órdenes simples. Puedes preguntar a las plantas sobre eventos que han ocurrido en el área del conjuro en el último día, como por ejemplo, las criaturas que han pasado por allí, el clima u otras circunstancias. Si dentro del alcance hay terreno que es difícil a causa de la vegetación (como matorrales o sotobosque), puedes convertirlo en terreno ordinario hasta el final del conjuro. Alternativamente, puedes convertir en terreno difícil una zona de terreno ordinario que tenga plantas para, por ejemplo, hacer que tus perseguidores sean entorpecidos por enredaderas y ramas bajas. Las plantas también pueden ser capaces de llevar a cabo otras tareas a discreción del DM. Este conjuro no permite que se desarraiguen y se desplacen, pero podrán mover libremente sus ramas, zarcillos y tallos. Si una criatura planta está en el área, puedes comunicarte con ella si compartís un idioma común, pero no consigues ninguna forma mágica de influenciarla. Este conjuro puede hacer que las plantas creadas por el conjuro enmarañar suelten a una criatura apresada."
    },
    {
      name: "Trepar cual arácnido",
      level: 2,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración, hasta 1 hora",
      description: "Hasta el final del conjuro una criatura voluntaria a la que toques gana la capacidad de caminar por el techo y de moverse hacia arriba, hacia abajo y de lado por superficies verticales. Esta manera de moverse no requiere del uso de las manos, que quedan libres. Además, el objetivo obtiene una velocidad trepando igual a su velocidad caminando."
    },
    {
      name: "Crecimiento Espinoso",
      level: 2,
      school: "Transmutación",
      classes: [
        "Druida",
        "Explorador"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "150 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Con un temblor surgen espinas y pinchos del suelo en un radio de 20 pies alrededor de un punto dentro del alcance. Hasta el final de la duración del conjuro el suelo del área es terreno difícil. Cuando una criatura entra o se mueve a través del área recibe 2d4 de daño perforante por cada 5 pies que se desplace. La transformación del suelo queda camuflada de manera que parece natural. Cualquier criatura que no pueda ver el área en el momento en que se lanza el conjuro debe superar una tirada de salvación de Sabiduría (Percepción) con CD igual a tu salvación de conjuros para darse cuenta de que el terreno es peligroso antes de entrar en él."
    },
    {
      name: "Espíritus Guardianes",
      level: 3,
      school: "Conjuración",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Personal (radio de 15 pies)",
      duration: "Concentración, hasta 10 minutos",
      description: "Invocas a los espíritus para que te protejan. Estos revolotean alrededor tuyo moviéndose en un radio de 15 pies hasta que finaliza el conjuro. Si eres bueno o neutral, su forma espectral es angelical o feérica, según elijas. Si eres malvado, su forma es infernal. Al lanzar este conjuro, puedes elegir cualquier número de criaturas que veas para que no sean afectadas. La velocidad de una criatura afectada se reduce a la mitad en el área. Cuando una criatura entra por primera vez en el área o comienza su turno en ella, debe realizar una tirada de salvación de Sabiduría. Si falla, recibe 3d8 de daño radiante (si eres bueno o neutral) o 3d8 de daño necrótico (si eres malvado). Si la supera, recibe la mitad del daño."
    },
    {
      name: "Arma Espiritual",
      level: 2,
      school: "Evocación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción adicional",
      range: "60 pies",
      duration: "1 minuto",
      description: "Creas un arma espectral flotante dentro del alcance que permanece hasta el final de la duración del conjuro o hasta que lo utilices de nuevo. Cuando lanzas este conjuro puedes hacer un ataque de conjuro cuerpo a cuerpo contra una criatura que se encuentre a 5 pies o menos del arma. Si impactas la criatura recibe tanto daño de fuerza como 1d8 + tu modificador de aptitud mágica. Como acción adicional puedes mover el arma hasta 20 pies y repetir el ataque contra una criatura que se encuentre a 5 pies o menos de ella. El arma puede tener la forma que desees. Los clérigos cuyas deidades estén asociadas con un arma en particular (como San Cuthbert conocido por su maza o Thor famoso por su martillo) utilizan esa arma como aspecto visual del conjuro.",
      damage: "Nivel 2: 1d8 + MOD, Nivel 3: 1d8 + MOD, Nivel 4: 2d8 + MOD, Nivel 5: 2d8 + MOD, Nivel 6: 3d8 + MOD, Nivel 7: 3d8 + MOD, Nivel 8: 4d8 + MOD, Nivel 9: 4d8 + MOD"
    },
    {
      name: "Nube Apestosa",
      level: 3,
      school: "Conjuración",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "90 pies",
      duration: "Concentración hasta 1 minuto",
      description: "Creas una nube de gas amarillo nauseabundo que cubre una zona esférica de 20 pies de radio alrededor de un punto de tu elección. Se extiende más allá de las esquinas y el área se considera muy oscura. Permanecerá en el ambiente hasta el final de la duración del conjuro. Cada criatura que esté completamente dentro de la nube al comienzo de su turno debe hacer una tirada de salvación de Constitución contra venenos. Si fracasa empleará su acción del turno en tambalearse y vomitar. Las criaturas que no necesitan respirar o que son inmunes a veneno tienen éxito automáticamente en esta tirada de salvación. Un viento moderado (por lo menos 10 millas por hora) dispersa la nube tras 4 asaltos. Un viento fuerte (de al menos 20 millas por hora) dispersa la nube tras 1 asalto."
    },
    {
      name: "Moldear la piedra",
      level: 4,
      school: "Transmutación",
      classes: [
        "Clérigo",
        "Druida",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Instantáneo",
      description: "Tocas un objeto de piedra de tamaño Mediano o más pequeño o una sección de piedra de no más de 5 pies en todas sus dimensiones y le das la forma que desees. Por ejemplo, podrías convertir una roca grande en un arma, un ídolo, o un ataúd, o crear un pasadizo a través de un muro, siempre que este no tenga más de 5 pies de grosor. También puedes transformar una puerta o su marco para dejarla sellada. El objeto que crees puede tener hasta dos bisagras y un pestillo, pero cualquier construcción mecánica más precisa es imposible."
    },
    {
      name: "Piel pétreo",
      level: 4,
      school: "Abjuración",
      classes: [
        "Druida",
        "Guardabosques",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "Concentración hasta 1 hora",
      description: "Este conjuro vuelve pétrea la carne de una criatura voluntaria a la que toques. Hasta el final del conjuro el objetivo tiene resistencia al daño contundente, cortante y perforante que no sea mágico."
    },
    {
      name: "Tormenta de la Venganza",
      level: 9,
      school: "Conjuración",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Vista",
      duration: "Concentración hasta 1 minuto",
      description: "Formas unas nubes de tormenta que se agitan en torno de un punto de tu elección que puedas ver cubriendo un área de 360 pies de radio. Sobre ella caen relámpagos, estallan truenos y rugen fuertes vientos. Todas las criaturas debajo de las nubes (a no más de 5.000 pies bajo ella) cuando estas aparecen deben hacer una tirada de salvación de Constitución. Si fallan la tirada sufrirán 2d6 de daño de trueno y quedarán ensordecidas durante 5 minutos. Cada asalto que mantengas la concentración en este conjuro, la tormenta produce en tu turno efectos adicionales. Asalto 2. Una lluvia ácida cae de la nube. Todas las criaturas debajo de ella reciben 1d6 de daño de ácido. Asalto 3. Llamas a seis relámpagos que surgen de la nube para electrocutar a seis criaturas u objetos de tu elección que estén debajo de ella. Cada objetivo no puede ser impactado por más de un relámpago. Las criaturas atacadas deben hacer una tirada de salvación de Destreza. Sufrirán 10d6 de daño de relámpago si fallan la tirada o la mitad del daño si la superan. Asalto 4. Enormes piedras de granizo se precipitan desde las nubes. Todas las criaturas debajo de ellas reciben 2d6 de daño contundente. Asaltos 5 a 10. Ráfagas de viento y una lluvia helada asaltan a las criaturas bajo las nubes. La zona cubierta se considera muy oscura y terreno difícil. Todas las criaturas debajo de ella reciben 1d6 de daño de frío. No se pueden realizar ataques con arma a distancia en el área. El viento y la lluvia cuentan como una distracción severa a la hora de mantener la concentración en un conjuro. Por último, las ráfagas de viento fuerte (desde 20 a 50 millas por hora) dispersan automáticamente niebla, brumas y fenómenos similares en el área, ya sean mundanos o mágicos.",
      damage: "Nivel 9: 2d6"
    },
    {
      name: "Sugestión",
      level: 2,
      school: "Encantamiento",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 8 horas",
      description: "Influencias mágicamente a una criatura a la que puedas ver dentro del alcance y que pueda oírte y comprenderte. Sugieres al objetivo un curso de acción (limitado a una o dos frases) pero siempre expresado de tal forma que parezca razonable. Pedirle a la criatura que se apuñale, se empale en una lanza, se inmole o realice cualquier otra actividad claramente dañina termina el conjuro. Las criaturas que no puedan ser hechizadas no se ven afectadas por este conjuro. El objetivo debe hacer una tirada de salvación de Sabiduría. Si falla, llevará a cabo la acción que le sugieres hasta donde le permitan sus capacidades. Esta acción puede continuar hasta el final de la duración del conjuro. Si la sugerencia puede ser llevada a cabo en menos tiempo, el conjuro terminará cuando el objetivo complete la tarea encomendada. Puedes especificar que ciertas condiciones disparen una actividad especial mientras el conjuro siga activo. Por ejemplo, puedes sugerir a un caballero que entregue su caballo de guerra al primer mendigo que vea. Si la condición no se cumple antes de que termine el conjuro, entonces la actividad no se lleva a cabo. Si tú o cualquiera de tus compañeros dañáis al objetivo, el conjuro termina."
    },
    {
      name: "Explosión Solar",
      level: 8,
      school: "Evocación",
      classes: [
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "150 pies",
      duration: "Instantáneo",
      description: "Llenas de deslumbrante luz del sol una zona esférica de 60 pies de radio alrededor de un punto de tu elección. Cada criatura en el área debe hacer una tirada de salvación de Constitución. Si fracasa recibirá 12d6 de daño radiante y quedará cegada durante 1 minuto. Si la supera recibirá la mitad del daño y no quedará cegada. Los muertos vivientes y los cienos tienen desventaja en esta tirada de salvación. Una criatura cegada por este conjuro puede realizar otra tirada de salvación de Constitución al final de cada uno de sus turnos. Si tiene éxito dejará de estar cegada. Este conjuro disipa cualquier oscuridad en el área que fuera producto de un conjuro.",
      damage: "Nivel 8: 12d6"
    },
    {
      name: "Símbolo",
      level: 7,
      school: "Abjuración",
      classes: [
        "Bardo",
        "Clérigo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Toque",
      duration: "Hasta que sea disipado o activado",
      description: "Cuando lanzas este conjuro, inscribes un glifo dañino en una superficie (como una mesa o una sección de un muro o suelo) o dentro de un objeto que pueda cerrarse (como un libro, pergamino o cofre del tesoro) para esconder el glifo. Si eliges una superficie, el glifo puede cubrir una zona de hasta 10 pies de diámetro. Si escoges un objeto, este tiene que permanecer en el mismo lugar. Si la superficie o el objeto es alejado más de 10 pies del punto en el que lanzaste el conjuro, este termina sin activarse y el glifo queda roto. El glifo es casi invisible y es necesario tener éxito en una prueba de Inteligencia (Investigación) con CD igual a tu salvación de conjuros para encontrarlo. Decides qué activa el glifo cuando lanzas el conjuro. Para glifos inscritos en una superficie, las activaciones más típicas incluyen tocar o pisar el glifo, retirar un objeto que lo cubría, o acercarse a una cierta distancia del glifo. Para glifos inscritos en un objeto, las activaciones más comunes incluyen abrir el objeto, acercarse a una cierta distancia de él, o ver o leer el glifo. Eres capaz de precisar aún más las condiciones de activación para que el conjuro solo se ponga en funcionamiento bajo ciertas circunstancias o de acuerdo a unas características físicas concretas (como la altura o el peso), un tipo de criatura (por ejemplo que únicamente afecte a aberraciones o drows) o un alineamiento. También puedes crear ciertas condiciones para que algunas criaturas no activen el glifo, como diciendo una palabra clave. Cuando inscribes el glifo, elige una de las opciones que aparecen más abajo para su efecto. Una vez activado el glifo brilla, llenando con luz tenue un área esférica de 60 pies de radio durante 10 minutos y pasado este tiempo el conjuro acaba. Todas las criaturas en la esfera cuando el glifo se activa son objetivos de su efecto, al igual que también lo son las criaturas que entren en la esfera por primera vez o terminen su turno en ella. Muerte. Cada objetivo debe hacer una tirada de salvación de Constitución, sufriendo lOdlO de daño de necrótico si falla, o la mitad del daño si la supera. Discordia. Cada objetivo debe hacer una tirada de salvación de Constitución. Si fracasa, reñirá y discutirá con otras criaturas durante 1 minuto."
    },
    {
      name: "Telequinesis",
      level: 5,
      school: "Transmutación",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Ganas la capacidad de mover o manipular criaturas u objetos con tu pensamiento. Impones tu voluntad en una criatura u objeto causando uno de los efectos explicados más abajo. Esto ocurre en el momento de lanzar el conjuro y hasta el final del mismo en cada asalto si utilizas tu acción para ello. Puedes afectar al mismo objetivo asalto tras asalto o elegir uno nuevo en cualquier momento. Si cambias de objetivo, el anterior ya no se ve afectado por el conjuro. Criatura. Puedes intentar mover a una criatura de tamaño Enorme o menor. Haz una prueba de característica con tu aptitud mágica enfrentada a una prueba de Fuerza de la criatura. Si ganas la tirada enfrentada, mueves al objetivo hasta 30 pies en cualquier dirección, incluyendo hacia arriba pero dentro del alcance de este conjuro. Hasta el final del próximo turno, la criatura queda apresada en tu agarre telequinético. Un objetivo elevado queda suspendido en el aire. En acciones subsiguientes, puedes usar tu acción para intentar mantener el agarre sobre la criatura repitiendo la tirada enfrentada. Objeto. Puedes intentar mover un objeto que pese hasta 1.000 libras. Si nadie viste o porta el objeto, lo mueves automáticamente hasta 30 pies en cualquier dirección, siempre dentro del alcance del conjuro. En caso contrario, haz una prueba de característica con tu aptitud mágica enfrentada a una prueba de Fuerza de la criatura que vista o porte el objeto. Si ganas la tirada enfrentada, le quitas el objeto a la criatura y lo mueves hasta 30 pies en cualquier dirección, dentro del alcance del conjuro. Puedes manipular de forma delicada un objeto con tu agarre telequinético con la precisión necesaria para utilizar una herramienta, abrir una puerta o recipiente, retirar o depositar un objeto en un recipiente abierto, o verter el contenido de un vial."
    },
    {
      name: "Enlace Telepático de Rary",
      level: 5,
      school: "Adivinación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "1 hora",
      description: "Forjas un enlace telepático entre hasta ocho criaturas voluntarias de tu elección dentro del alcance. Cada uno de los objetivos queda unido psíquicamente a los demás hasta el final del conjuro. Las criaturas con puntuaciones de Inteligencia de 2 o menos no se ven afectadas por este conjuro. Hasta que finalice el conjuro, los objetivos pueden comunicarse telepáticamente a través del enlace, tengan o no un lenguaje en común. La comunicación es capaz de cubrir cualquier distancia, pero no se extiende a otros planos de existencia."
    },
    {
      name: "Teletransporte",
      level: 7,
      school: "Conjuración",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "10 pies",
      duration: "Instantáneo",
      description: "Este conjuro os transporta de forma instantánea a un destino que elijas a ti y hasta ocho criaturas voluntarias o un objeto de tu elección que en ambos casos deben estar dentro de tu campo de visión y del alcance del conjuro. Si eliges un objeto debe caber en un cubo de 10 pies de lado y no puede estar vistiéndolo o llevándolo una criatura que no quiera desprenderse de él. Debes conocer el destino y encontrarse este en tu mismo plano de existencia. Tu familiaridad con él determina si llegas allí con éxito. El DM tira d100 y consulta esta tabla. | Familiaridad | Percance | Área similar | Apartado del objetivo | En el objetivo | |---|---|---|---|---| | Círculo permanente | -- | -- | -- | 01-100 | | Objeto asociado | -- | -- | -- | 01-100 | | Muy familiar | 01-05 | 06-13 | 14-24 | 25-100 | | Visto esporádicamente | 01-33 | 34-43 | 44-53 | 54-100 | | Visto una vez | 01-43 | 44-53 | 54-73 | 74-100 | | Descripción | 01-43 | 44-53 | 54-73 | 74-100 | | Destino falso | 01-50 | 51-100 | -- | -- | ***Familiaridad.*** \"Círculo permanente\" se refiere a un círculo de teletransportación permanente cuya secuencia de sellos conoces. \"Objeto asociado\" quiere decir que posees un objeto recogido en la localización deseada en los últimos seis meses como un libro de la biblioteca de un mago, sábanas de una suite real o un trozo de mármol de la tumba secreta de un liche. \"Muy familiar\" es un sitio en el que has estado muchas veces que has estudiado con cuidado o que puedes ver en el momento de lanzar el conjuro. \"Visto esporádicamente\" es un lugar que has visto más de una vez pero con el que no estás familiarizado. \"Visto una vez\" es un sitio que has visto una vez posiblemente mediante magia. \"Descripción\" es un lugar cuya localización y aspecto conoces a través de la descripción de otra fuente, como por ejemplo de un mapa. \"Destino falso\" es un lugar que no existe. Quizá intentaste escudriñar el santuario de un enemigo y lo que viste era una ilusión o estás intentando teletransportarte a un lugar que ya no existe. ***En el objetivo.*** Tú y tu grupo (o el objeto elegido) aparecéis donde querías. ***Apartado del objetivo.*** Tú y tu grupo (o el objeto elegido) aparecéis a una distancia aleatoria del destino en una dirección también aleatoria. Esta distancia será un porcentaje igual a 1d10 x 1d10 de la distancia que ibais a recorrer. Por ejemplo, si intentas viajar 120 millas, aterrizas apartado del objetivo, y sacas un 5 y un 3 en los 2d10, entonces te habrás alejado un 15%, es decir, 18 millas. El DM determina la dirección aleatoriamente tirando 1d8 y designando 1 como norte, 2 como noreste, 3 como oeste, y así sucesivamente, siguiendo los puntos cardinales. Si te ibas a teletransportar a una ciudad costera y acabas 18 millas mar adentro, podrías tener problemas. ***Área similar.*** Tú y tu grupo (o el objeto elegido) aparecéis en un área diferente que es visual o temáticamente similar al área que querías. Si te diriges a tu propio laboratorio, por ejemplo, podrías acabar en el laboratorio de otro mago o en la tienda de suministros alquímicos que tiene muchas de las herramientas e instrumentos de tu laboratorio. Generalmente aparecerás en el sitio similar más cercano, pero como el conjuro no tiene límite de alcance, podrías acabar en cualquier parte del plano. ***Percance.*** La impredecible magia del conjuro provoca un viaje dificultoso. Cada criatura teletransportada (o el objeto) recibe 3d10 de daño de fuerza y el DM vuelve a tirar en la tabla para ver dónde aparecéis (pueden ocurrir múltiples percances que causan daño cada vez)."
    },
    {
      name: "Círculo de Teletransportación",
      level: 5,
      school: "Conjuración",
      classes: [
        "Bardo",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "M"
      ],
      castingTime: "1 minuto",
      range: "10 pies",
      duration: "1 asalto",
      description: "Al lanzar el conjuro dibujas un círculo de 10 pies de diámetro en el suelo inscrito con sellos que enlazan tu localización a un círculo de teletransportación permanente de tu elección cuya secuencia de sellos conozcas y que esté en tu mismo plano de existencia. Un portal reluciente se abre dentro del círculo dibujado y permanece abierto hasta el final de tu próximo turno. Cualquier criatura que atraviese el portal aparecerá a 5 pies del círculo destino o en el espacio desocupado más cercano. Muchos grandes templos, gremios y otros sitios importantes tienen círculos de teletransportación permanentes inscritos en alguna parte de sus dominios. Cada círculo incluye una secuencia de sellos única, una ristra de runas mágicas colocadas siguiendo un patrón específico. Cuando aprendes a lanzar este conjuro también conoces las secuencias de sellos de dos destinos del plano material a determinar por el DM. Puedes aprender nuevas secuencias de sellos durante tus aventuras. Memorizarás de forma permanente una de estas secuencias si la estudias durante 1 minuto. Puedes crear un círculo de teletransportación permanente si lanzas este conjuro en el mismo sitio todos los días durante un año. No necesitas teletransportarte usando el círculo cuando lo lanzas de este modo."
    },
    {
      name: "Taumaturgia",
      level: 0,
      school: "Transmutación",
      classes: [
        "Clérigo"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Hasta 1 minuto",
      description: "Manifiestas un pequeño milagro o señal de poder sobrenatural dentro del alcance. Produces uno de los siguientes efectos mágicos dentro del alcance. - Tu voz resuena hasta tres veces más fuerte de lo normal durante 1 minuto. - Haces que una llama titile, cambie la intensidad de su brillo o modifique su color durante 1 minuto. - Haces que la tierra tiemble inofensivamente durante 1 minuto. - Creas un sonido instantáneo que tiene como origen un punto de tu elección dentro del alcance, como el retumbar de un trueno, el graznido de un cuervo o unos susurros de mal agüero. - Haces que una puerta o ventana que no esté cerrada con llave se abra o cierre de golpe. - Cambias el aspecto de tus ojos durante 1 minuto. Si lanzas este conjuro varias veces puedes mantener hasta tres de sus efectos no instantáneos activos a la vez, y para finalizar cualquiera de ellos deberás emplear una acción."
    },
    {
      name: "Ola atronadora",
      level: 1,
      school: "Evocación",
      classes: [
        "Bardo",
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Una ola de fuerza atronadora surge de tu cuerpo. Todas las criaturas en un cubo de 15 pies adyacente a ti deben hacer una tirada de salvación de Constitución. Las criaturas que fallen la tirada sufrirán 2d8 de daño de trueno y serán empujadas 10 pies y las que la superen sufrirán la mitad del daño y no serán empujadas. Además, los objetos dentro del área de efecto que nadie lleve o vista son empujados automáticamente 10 pies en dirección contraria a ti. El conjuro crea una explosión sónica audible a 300 pies de distancia.",
      damage: "Nivel 1: 2d8, Nivel 2: 3d8, Nivel 3: 4d8, Nivel 4: 5d8, Nivel 5: 6d8, Nivel 6: 7d8, Nivel 7: 8d8, Nivel 8: 9d8, Nivel 9: 10d8"
    },
    {
      name: "Parar el Tiempo",
      level: 0,
      school: "Escuela no especificada",
      classes: [],
      components: [],
      castingTime: "No especificado",
      range: "No especificado",
      duration: "No especificado",
      description: "Detienes brevemente el paso del tiempo para todo el mundo menos para ti. No pasa el tiempo para ninguna de las otras criaturas, pero tú puedes llevar a cabo 1d4 + 1 turnos seguidos en los cuales puedes usar acciones y moverte de forma normal. El conjuro termina si una de las acciones que utilizas en este periodo o alguno de los efectos que creas durante este tiempo afectan a una criatura que no seas tú o a un objeto vestido o portado por alguien. Además, el conjuro termina si te alejas más de 1.000 pies del lugar donde lo lanzaste."
    },
    {
      name: "Pequeña Choza de Leomund",
      level: 3,
      school: "Evocación",
      classes: [
        "Bardo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "Lanzador",
      duration: "8 horas",
      description: "Una cúpula inmóvil de fuerza emerge en un radio de 10 pies alrededor y por encima de ti, permaneciendo estática hasta el final de la duración del conjuro. Este finaliza inmediatamente si te alejas de la zona. Hasta nueve criaturas de tamaño mediano o menor pueden caber dentro de la cúpula contigo. El conjuro fracasa si su área incluye a una criatura más grande o a más de nueve criaturas. Las criaturas y objetos dentro de la cúpula cuando lanzas el conjuro pueden atravesarla libremente. Todas las demás criaturas y objetos están impedidos de pasar a través de ella. Los conjuros y otros efectos mágicos no pueden propagarse dentro de la cúpula o ser lanzados desde su interior. La atmósfera dentro de este espacio es confortable y seca, sin importar el clima exterior. Hasta que finalice el conjuro, puedes optar porque el interior esté iluminado con luz tenue o quede en oscuridad. La cúpula es opaca desde el exterior, del color que elijas, pero transparente desde el interior."
    },
    {
      name: "Don de lenguas",
      level: 3,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Clérigo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "1 hora",
      description: "Este conjuro otorga a la criatura que toques la habilidad de comprender cualquier idioma hablado que escuche. Además, cuando el objetivo hable, cualquier criatura que conozca al menos un idioma y pueda escucharle entenderá lo que dice."
    },
    {
      name: "Paso Arbóreo",
      level: 5,
      school: "Conjuración",
      classes: [
        "Druida",
        "Montaraz"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 minuto",
      description: "Ganas la capacidad de entrar en un árbol y moverte desde su interior hasta el interior de otro árbol del mismo tipo que se encuentre una distancia máxima de 500 pies. Ambos árboles deben estar vivos y ser de por lo menos tu tamaño. Cuesta 5 pies de movimiento entrar en un árbol. Conoces inmediatamente la localización del resto de árboles del mismo tipo en un radio de 500 pies y como parte del movimiento usado para entrar en el árbol puedes pasar a uno de esos otros árboles o salir del que ocupas actualmente. En ambos casos apareces en un lugar de tu elección a 5 pies del árbol destino utilizando otros 5 pies de movimiento. Si no te queda movimiento apareces a 5 pies del árbol en el que entraste. Puedes usar esta habilidad de transporte una vez por asalto hasta el final de la duración del conjuro. Debes acabar cada turno fuera de un árbol."
    },
    {
      name: "Polimorfar Verdadero",
      level: 9,
      school: "Transmutación",
      classes: [
        "Bardo",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 hora",
      description: "Elige a una criatura u objeto no mágico que puedas ver dentro del alcance. Puedes transformar a la criatura en una criatura diferente, o en un objeto, o al objeto en una criatura (nadie puede estar vistiendo o portando este objeto). La transformación se mantiene hasta el final de la duración del conjuro o hasta que el objetivo muera o sea reducido a 0 puntos de golpe. Si te concentras en el conjuro durante su duración completa, la transformación permanece hasta que sea disipada. El conjuro no tendrá efecto en un cambiaformas o en una criatura con 0 puntos de golpe. Un objetivo no voluntario puede realizar una tirada de salvación de Carisma y si tiene éxito, no se verá afectado por el conjuro. Criatura en criatura. Si conviertes una criatura en otro tipo de criatura, la nueva forma puede ser la de cualquier criatura cuyo valor de desafío sea igual o menor que el del objetivo (o igual o menor que el nivel del objetivo si este no tiene un valor de desafío). Reemplaza el perfil del objetivo con el perfil de la forma elegida, incluyendo las puntuaciones de característica mentales. Mantendrá su alineamiento y personalidad. El objetivo pasa a tener los puntos de golpe de su nueva forma y cuando revierta a su forma normal, volverá a poseer los puntos de golpe que tuviera antes de la transformación. Si la transformación se rompe al quedar reducido a 0 puntos de golpe, cualquier daño sobrante se aplica a la forma normal. Si este daño sobrante no reduce la forma normal de la criatura a 0 puntos de vida, no cae inconsciente. Las acciones de la criatura quedan limitadas por la naturaleza de su nueva forma y tampoco puede hablar, lanzar conjuros o realizar cualquier acción que requiera del habla o uso de las manos, a menos que su nueva forma sea capaz de estas acciones. El equipamiento del objetivo se funde con la nueva forma. El objetivo no puede activar, blandir o beneficiarse de su equipamiento de ninguna manera. Objeto en criatura. Puedes convertir un objeto en cualquier tipo de criatura, siempre que el tamaño de esta no sea mayor que el tamaño del objeto y su valor de desafío sea igual o inferior a 9. La criatura es amistosa hacia ti y tus compañeros. Actúa en cada uno de tus turnos. Tú decides qué acción realiza y cómo se mueve. El DM tiene los perfiles de estas criaturas y resuelve sus acciones y movimientos. Si el conjuro se vuelve permanente, ya no controlas a la criatura. Puede seguir siendo amistosa hacia ti, dependiendo de cómo la hayas tratado. Criatura en objeto. Si conviertes a una criatura en un objeto, se transforma junto con cualquier cosa que vista y porte en la forma elegida. El perfil de la criatura será el del objeto y esta no tendrá memoria del tiempo pasado en esa forma después de que el conjuro termine y vuelva a su forma normal."
    },
    {
      name: "Resurrección verdadera",
      level: 9,
      school: "Nigromancia",
      classes: [
        "Clérigo",
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 hora",
      range: "Toque",
      duration: "Instantáneo",
      description: "Tocas a una criatura que lleve muerta menos de 200 años y que no haya fallecido de edad avanzada. Si su alma es libre y lo desea la criatura vuelve a la vida con todos sus puntos de golpe. Este conjuro también neutraliza cualquier veneno cura cualquier enfermedad y levanta cualquier maldición que afligiera a la criatura en el momento de su muerte. El conjuro también restaura órganos y miembros dañados o perdidos. Si la criatura es un muerto viviente la resucitará en su estado previo a la muerte en vida. El conjuro puede incluso proporcionar un cuerpo nuevo si el original ya no existe en cuyo caso deberás pronunciar el nombre de la criatura. Esta aparecerá en un espacio desocupado a 10 pies de ti."
    },
    {
      name: "Visión Veraz",
      level: 6,
      school: "Adivinación",
      classes: [],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "1 hora",
      description: "Este conjuro proporciona a la criatura voluntaria que toques la habilidad de ver las cosas tal y como son realmente. Hasta el final de la duración del conjuro, el objetivo disfrutará de visión verdadera, detectará las puertas ocultas mediante magia y podrá ver el Plano Etéreo, todo ello hasta 120 pies de distancia."
    },
    {
      name: "Impacto Certero",
      level: 0,
      school: "Adivinación",
      classes: [
        "Bardo",
        "Hechicero",
        "Brujo",
        "Mago"
      ],
      components: [
        "S"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "Concentración hasta 1 asalto",
      description: "Extiendes tu mano y señalas con el dedo a un objetivo dentro del alcance. Tu magia te da un momentáneo entendimiento de las defensas del objetivo. En tu próximo turno, ganas ventaja en tu primera tirada de ataque contra el objetivo, suponiendo que este conjuro no haya terminado."
    },
    {
      name: "Sirviente Invisible",
      level: 1,
      school: "Conjuración",
      classes: [
        "Bardo",
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "1 hora",
      description: "Este conjuro crea una fuerza invisible sin mente y sin forma que realiza tareas simples bajo tus órdenes hasta el final de la duración del conjuro. El sirviente surge de la nada en un espacio desocupado del suelo dentro del alcance. Tiene CA 10, 1 punto de golpe, su Fuerza es 2 y no puede atacar. Si sus puntos de golpe se reducen a 0, el conjuro termina. Una vez por turno como acción adicional, puedes dar una orden mental al sirviente para que se mueva 15 pies e interactúe con un objeto. El sirviente es capaz de realizar tareas simples que un siervo humano podría hacer, como traer y llevar cosas, limpiar, remendar, doblar la ropa, encender el fuego, servir comida o escanciar vino. Una vez que le das una orden, el sirviente lleva a cabo la tarea lo mejor posible hasta terminarla, momento en el cual queda a la espera de tu siguiente orden. Si ordenas al sirviente realizar una tarea que lo alejaría más de 60 pies de ti, el conjuro termina."
    },
    {
      name: "Toque Vampírico",
      level: 3,
      school: "Nigromancia",
      classes: [
        "Brujo",
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Concentración hasta 1 minuto",
      description: "El toque de tu mano envuelta en sombras puede absorber la fuerza vital de otros para curar tus heridas. Haz un ataque de conjuro cuerpo a cuerpo contra una criatura dentro del alcance. Si impactas el objetivo sufre 3d6 de daño necrótico y tú recuperas tantos puntos de golpe como la mitad del daño necrótico infligido. Hasta el final del conjuro puedes usar una acción en cada uno de tus turnos para atacar de nuevo.",
      damage: "Nivel 3: 3d6, Nivel 4: 4d6, Nivel 5: 5d6, Nivel 6: 6d6, Nivel 7: 7d6, Nivel 8: 8d6, Nivel 9: 9d6"
    },
    {
      name: "Burla Dañina",
      level: 0,
      school: "Encantamiento",
      classes: [
        "Bardo"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      description: "Profieres una sarta de improperios entremezclados con sutiles encantamientos hacia una criatura que puedas ver dentro del alcance. Si el objetivo puede oírte (aunque no necesita entenderte) debe tener éxito en una tirada de salvación de Sabiduría o recibirá 1d4 de daño psíquico y sufrirá desventaja en la siguiente tirada de ataque que realice antes del final de su próximo turno. A niveles superiores, el daño del conjuro aumenta en 1d4 cuando alcanzas nivel 5 (2d4), nivel 11 (3d4), y nivel 17 (4d4)."
    },
    {
      name: "Muro de Fuego",
      level: 4,
      school: "Evocación",
      classes: [
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Creas un muro de fuego en una superficie sólida que puedas ver dentro del alcance. Puedes crear un muro recto de hasta 60 pies de largo, 20 de alto y 1 de ancho, o un muro en forma de anillo de 20 pies de diámetro, 20 de alto y 1 de grosor. El muro es opaco y permanecerá hasta el final de la duración del conjuro. Cuando el muro aparece, todas las criaturas en la zona deben hacer una tirada de salvación de Destreza. Sufrirán 5d8 de daño de fuego si fallan la tirada, o la mitad del daño si la superan. Un lado del muro, elegido por ti al lanzar el conjuro, infligirá 5d8 de daño de fuego a cada criatura que termine su turno a 10 pies o menos de ese lado o dentro del muro. También recibirán ese daño las criaturas que entren en el muro por primera vez en un turno o que acaben su turno en él. El otro lado del muro no causa daño. El otro lado del muro no causa daño.",
      damage: "Nivel 4: 5d8"
    },
    {
      name: "Muro de Fuerza",
      level: 5,
      school: "Evocación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Un muro de fuerza invisible aparece en un punto de tu elección dentro del alcance. Este puede tener cualquier orientación que elijas ya sea una barrera horizontal o vertical o colocado en ángulo. Puede flotar en el aire o reposar en una superficie sólida. Puedes darle forma de cúpula semiesférica o de esfera con un radio de hasta 10 pies o puedes crear una superficie plana compuesta por diez paneles de 10 por 10 pies. Cada panel debe ser contiguo a otro. En cualquiera de las disposiciones el muro tiene 1/4 de pulgada de ancho. Permanecerá hasta el final de la duración del conjuro. Si el muro atraviesa el espacio de una criatura al aparecer, esta se verá empujada a uno u otro lado del muro (a tu elección). Nada puede atravesar físicamente el muro. Es inmune a todo tipo de daño y no puede ser disipado usando disipar magia. Sin embargo, el conjuro desintegrar destruye todo el muro instantáneamente. El muro también se extiende al Plano Etéreo, bloqueando los viajes etéreos."
    },
    {
      name: "Muro de Hielo",
      level: 6,
      school: "Evocación",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Creas un muro de hielo en una superficie sólida que puedas ver dentro del alcance. Puedes darle forma de cúpula semiesférica o de esfera con un radio de hasta 10 pies o puedes crear una superficie plana compuesta por diez paneles de 10 por 10 pies. Cada panel debe ser contiguo a otro. En cualquiera de las formas el muro tiene 1 pie de ancho y dura hasta el final del conjuro. Si el muro atraviesa el espacio de una criatura al aparecer esta será empujada a un lado del muro y deberá hacer una tirada de salvación de Destreza. La criatura sufrirá 10d6 de daño de frío si falla la tirada o la mitad del daño si la supera. El muro es un objeto que puede ser dañado y por tanto atravesado. Tiene CA 12 y 30 puntos de golpe por cada sección de 10 pies además de ser vulnerable al daño de fuego. Reducir una sección de 10 pies del muro a 0 puntos de golpe la destruye y deja una capa de aire helado en el espacio que ocupaba el muro. Cuando una criatura atraviesa esta capa de aire por primera vez en un turno debe realizar una tirada de salvación de Constitución. Sufrirá 5d6 de daño de frío si falla la tirada o la mitad del daño si la supera.",
      damage: "Nivel 6: 10d6, Nivel 7: 12d6, Nivel 8: 14d6, Nivel 9: 16d6"
    },
    {
      name: "Muro de piedra",
      level: 5,
      school: "Evocación",
      classes: [
        "Druida",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Un muro no mágico de piedra sólida surge en un punto de tu elección dentro del alcance. Este tiene 6 pulgadas de grosor y está formado por diez paneles cuadrados de 10 por 10 pies. Cada panel debe ser contiguo a otro. De forma alternativa puedes crear paneles rectangulares de 10 pies por 20 pies pero solo tendrán 3 pulgadas de grosor. Si el muro atraviesa el espacio de una criatura cuando aparece esta se verá empujada a uno u otro lado del muro (a tu elección). Si una criatura fuera a quedar completamente rodeada por el muro (o por el muro y otra superficie sólida), esta puede hacer una tirada de salvación de Destreza. Si tiene éxito puede usar su reacción para mover hasta su velocidad de manera que no quede encerrada por el muro. El muro puede tener cualquier forma que desees pero no puede ocupar el mismo espacio que una criatura u objeto. No es necesario que sea vertical o que descanse sobre unos cimientos sólidos. Sin embargo, sí que es obligatorio que se funda con un cuerpo de piedra existente y que este pueda sostener el muro. De esta manera podrías usar el conjuro para salvar un abismo o crear una rampa. Si creas una arcada de más de 20 pies de longitud, debes reducir a la mitad el tamaño de cada panel para crear estructuras de soporte. Además eres capaz de manera tosca de dar forma al muro para añadir almenas, parapetos, etc. El muro es un objeto hecho de piedra que puede ser dañado y, por tanto, atravesado. Cada panel tiene CA 15 y 30 puntos de golpe por cada pulgada de grosor. Reducir un panel a 0 puntos de golpe lo destruye y podría, a discreción del DM, hacer que otros paneles conectados se derrumbasen. Si mantienes tu concentración en el conjuro durante toda su duración, el muro se convierte en permanente y no puede ser disipado. En caso contrario, el muro desaparece cuando el conjuro termina."
    },
    {
      name: "Muro de espinas",
      level: 6,
      school: "Conjuración",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración hasta 10 minutos",
      description: "Creas un muro de maleza resistente, flexible y enmarañada cuajada de espinas afiladas como agujas. Este aparece sobre una superficie sólida dentro del alcance y permanece hasta el final de la duración del conjuro. Puedes crear un muro recto de hasta 60 pies de largo, 10 de alto y 5 de ancho, o un muro en forma de anillo de 20 pies de diámetro, hasta 20 pies de alto y 5 de grosor. En cualquier caso, bloquea la línea de visión. Cuando el muro aparece, todas las criaturas en la zona deben hacer una tirada de salvación de Destreza. Sufrirán 7d8 de daño perforante si fallan la tirada, o la mitad del daño si la superan. Una criatura puede atravesar el muro, pero será una tarea lenta y dolorosa. Deberá emplear 4 pies de movimiento por cada pie que quiera mover. Además, cuando una criatura entra en el área del muro por primera vez en un turno o cuando empieza su turno en ella, debe realizar una tirada de salvación de Destreza. Sufrirá 7d8 de daño cortante si falla la tirada, o la mitad del daño si la supera.",
      damage: "Nivel 6: 7d8, Nivel 7: 8d8, Nivel 8: 9d8, Nivel 9: 10d8"
    },
    {
      name: "Vínculo Protector",
      level: 2,
      school: "Abjuración",
      classes: [],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "Toque",
      duration: "1 hora",
      description: "Este conjuro protege a una criatura voluntaria a la que toques y crea una conexión mística entre vosotros hasta que el conjuro termine. Mientras el objetivo se encuentre a 60 pies o menos de ti, obtiene un modificador de +1 a su CA y tiradas de salvación, así como resistencia a todo el daño. Sin embargo, cada vez que reciba daño, tú sufrirás la misma cantidad de daño. El conjuro finaliza si llegas a tener 0 puntos de golpe o si el objetivo y tú os separáis más de 60 pies. También termina si se lanza otra vez sobre cualquiera de las dos criaturas conectadas o si utilizas una acción para finalizarlo."
    },
    {
      name: "Respirar bajo el agua",
      level: 3,
      school: "Transmutación",
      classes: [
        "Druida",
        "Explorador",
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "24 horas",
      description: "Este conjuro proporciona a un máximo de diez criaturas que puedas ver dentro del alcance la habilidad de respirar bajo el agua hasta el final del conjuro. Las criaturas afectadas también retienen su modo de respiración normal."
    },
    {
      name: "Caminar sobre el agua",
      level: 3,
      school: "Transmutación",
      classes: [
        "Clérigo",
        "Druida",
        "Explorador",
        "Hechicero"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "30 pies",
      duration: "1 hora",
      description: "Este conjuro proporciona la capacidad de moverse a través de cualquier superficie líquida como agua, ácido, barro, nieve, arenas movedizas o lava como si fuera un terreno sólido inofensivo (aunque las criaturas que crucen lava fundida podrían recibir daño del intenso calor). Un máximo de diez criaturas que puedas ver dentro del alcance recibirán esta capacidad hasta que el conjuro termine. Si eliges como objetivo a una criatura sumergida en un líquido, el conjuro la elevará a la superficie del mismo a una velocidad de 60 pies por asalto."
    },
    {
      name: "Telaraña",
      level: 2,
      school: "Conjuración",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "60 pies",
      duration: "Concentración hasta 1 hora",
      description: "Conjuras una masa de telarañas densa y pegajosa en un punto de tu elección dentro del alcance. Las telarañas ocupan un cubo de 20 pies de lado desde ese punto y permanecerán allí hasta el final de la duración del conjuro. La zona cubierta se considera ligeramente oscura y terreno difícil. Si las telarañas no están ancladas entre dos objetos sólidos (como muros o árboles) o extendidas sobre un suelo, muro o techo, se colapsarán sobre sí mismas y el conjuro terminará al final de tu próximo turno. Las telarañas dispuestas sobre una superficie plana tienen una profundidad de 5 pies. Cualquier criatura que comience su turno en las telarañas o que entre en ellas durante el mismo debe hacer una tirada de salvación de Destreza. Si la falla, quedará apresada mientras siga en las telarañas o hasta que se libere. Una criatura apresada puede utilizar su acción para hacer una prueba de Fuerza contra tu CD de salvación de conjuro. Si la supera, dejará de estar apresada. Las telarañas son inflamables. Cualquier cubo de 5 pies de lado expuesto al fuego se quema por completo en 1 asalto, causando 2d4 de daño de fuego a cualquier criatura que comience su turno en el incendio."
    },
    {
      name: "Terror Abyecto",
      level: 9,
      school: "Ilusión",
      classes: [
        "Mago"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Sirviéndote de los miedos más abyectos de un grupo de criaturas, creas en su mente seres ilusorios que solo ellas pueden ver. Todas las criaturas en una esfera de 30 pies de radio centrada en un punto de tu elección dentro del alcance deben hacer una tirada de salvación de Sabiduría. Aquellas que fallen estarán asustadas por la duración del conjuro. La ilusión se nutre de los terrores más profundos del objetivo manifestando sus peores pesadillas como una amenaza implacable. Al principio de cada uno de sus turnos, mientras dure el conjuro, la criatura debe tener éxito en una tirada de salvación de Sabiduría o recibir 4d10 de daño psíquico. Si tiene éxito, el conjuro termina para esa criatura."
    },
    {
      name: "Viajar con el Viento",
      level: 6,
      school: "Transmutación",
      classes: [
        "Druida"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 minuto",
      range: "30 pies",
      duration: "8 horas",
      description: "Hasta el final de la duración del conjuro, tú y hasta diez criaturas voluntarias que puedas ver dentro del alcance asumís una forma gaseosa, tomando la apariencia de jirones de nube. Mientras mantengan esta forma, cada criatura tendrá una velocidad volando de 300 pies y resistencia al daño de armas no mágicas. Las únicas acciones que una criatura puede realizar en esta forma son Correr o volver a su forma habitual. Transformarse de vuelta lleva 1 minuto, y durante este tiempo la criatura estará incapacitada y no podrá moverse. Hasta el final del conjuro, la criatura también podrá volver a convertirse en nube, acto que también precisa del proceso de transformación de 1 minuto detallado más arriba. Si una criatura está volando y en forma gaseosa cuando el efecto termina, descenderá 60 pies por asalto durante 1 minuto hasta que aterrice de forma segura. Si pasado 1 minuto no puede aterrizar, caerá la distancia restante."
    },
    {
      name: "Muro de Viento",
      level: 3,
      school: "Evocación",
      classes: [
        "Druida",
        "Montaraz"
      ],
      components: [
        "V",
        "S",
        "M"
      ],
      castingTime: "1 acción",
      range: "120 pies",
      duration: "Concentración, hasta 1 minuto",
      description: "Un muro de fuerte viento surge desde el suelo en un punto de tu elección dentro del alcance. Puedes crearlo con hasta 50 pies de longitud, 15 de altura y 1 de grosor. El muro puede tener la forma que desees mientras constituya un camino continuo a lo largo del suelo. Permanecerá hasta el final de la duración del conjuro. Cuando el muro aparece, todas las criaturas dentro de la zona limitada por el muro deben hacer una tirada de salvación de Fuerza. Sufrirán 3d8 de daño contundente si fallan la tirada o la mitad del daño si la superan. El fuerte viento mantiene a raya nieblas, humos, y otros gases. Las criaturas voladoras u objetos de tamaño Pequeño o menor no podrán atravesar el muro. Los materiales libres y ligeros que sean acercados al muro volarán hacia arriba. Las flechas, virotes y otros proyectiles ordinarios dirigidos a criaturas tras el muro serán desviados hacia arriba y faltarán automáticamente. Las rocas arrojadas por gigantes o armas de asedio, así como los proyectiles similares, no se verán afectadas. Las criaturas con forma gaseosa tampoco podrán atravesar el muro.",
      damage: "Nivel 3: 3d8"
    },
    {
      name: "Deseo",
      level: 9,
      school: "Conjuración",
      classes: [
        "Hechicero",
        "Mago"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "Lanzador",
      duration: "Instantáneo",
      description: "Deseo es el conjuro más poderoso que puede lanzar un mortal. Te permite alterar los cimientos de la realidad de acuerdo a tus deseos. El uso básico de este conjuro es duplicar cualquier otro conjuro de nivel 8 o menos. No necesitas cumplir ninguno de los requisitos de ese conjuro, incluyendo componentes materiales costosos. El conjuro simplemente surte efecto. De forma alternativa, puedes crear uno de los siguientes efectos de tu elección: - Creas un objeto no mágico con un valor de hasta 25.000 piezas de oro. El objeto no puede tener más de 300 pies en ninguna de sus dimensiones y aparecerá en un espacio libre que puedas ver en el suelo. - Haces que hasta veinte criaturas que puedas ver recuperen todos sus puntos de golpe y terminas con todos los efectos en ellos tal como lo haría el conjuro restablecimiento mayor. - Otorgas hasta a diez criaturas que puedas ver resistencia a un tipo de daño que elijas. - Otorgas hasta a diez criaturas que puedas ver inmunidad a un conjuro o efecto mágico específico durante 8 horas. Por ejemplo, podrías hacer que tú y todos tus compañeros sean inmunes al ataque de drenar vida de un liche. - Deshaces un hecho reciente forzando la repetición de una tirada hecha durante el último asalto (incluyendo tu último turno). La realidad se remodela para acomodar el nuevo resultado. Por ejemplo, un conjuro de deseo podría deshacer con éxito una tirada de salvación de un oponente, un golpe crítico de un enemigo o una tirada de salvación fallida de un amigo. Puedes obligar a que la tirada se repita con ventaja o desventaja, y puedes elegir si usar el resultado de la repetición o el original. Podrías lograr algo más allá del alcance de los ejemplos anteriores. Expresa tu deseo al Director de Juego tan precisamente como sea posible. El Director de Juego tiene mucha libertad para determinar qué sucede en tales casos; cuanto más grande sea el deseo, más probable es que algo salga mal. Este conjuro podría simplemente fallar, el efecto deseado podría alcanzarse solo parcialmente, o podrías sufrir alguna consecuencia imprevista como resultado de cómo formulaste el deseo. Por ejemplo, desear que un villano esté muerto podría transportarte hacia adelante en el tiempo a un período cuando ese villano ya no está vivo, sacándote efectivamente del juego. De manera similar, desear un objeto mágico legendario o un artefacto podría transportarte instantáneamente a la presencia del poseedor actual del objeto. El esfuerzo de lanzar este conjuro para producir cualquier efecto que no sea duplicar otro conjuro te debilita. Después de hacer frente a ese estrés, cada vez que lances un conjuro hasta que completes un descanso largo, recibirás 1d10 de daño necrótico por nivel de ese conjuro. Este daño no puede ser reducido ni prevenido de ninguna manera. Además, tu Fuerza se reduce a 3, si no es ya 3 o menos, durante 2d4 días. Por cada uno de esos días que pases descansando y realizando únicamente actividades ligeras, tu tiempo de recuperación se reduce en 2 días. Finalmente, hay un 33% de posibilidades de que no puedas volver a lanzar deseo nunca más si sufres este estrés."
    },
    {
      name: "Palabra de Regreso",
      level: 6,
      school: "Conjuración",
      classes: [
        "Clerigo"
      ],
      components: [
        "V"
      ],
      castingTime: "1 acción",
      range: "5 pies",
      duration: "Instantáneo",
      description: "Tú y hasta cinco criaturas voluntarias a 5 pies de ti os teleportáis instantáneamente a un santuario designado previamente. Apareceréis en el espacio libre más cercano al punto que elegiste al preparar tu santuario (ver más abajo). Si lanzas este conjuro sin haber dispuesto un santuario primero, este no tendrá ningún efecto. Primero debes designar un santuario lanzando este conjuro dentro de una localización, como un templo dedicada o fuertemente vinculada a tu deidad. Si intentas lanzar el conjuro para este propósito en un área que no esté consagrada a tu divinidad, este no tendrá efecto."
    },
    {
      name: "Zone of Truth",
      level: 2,
      school: "Enchantment",
      classes: [
        "Bard",
        "Cleric",
        "Paladin"
      ],
      components: [
        "V",
        "S"
      ],
      castingTime: "1 action",
      range: "60 feet",
      duration: "10 minutes",
      description: "You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw. An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can remain evasive in its answers as long as it remains within the boundaries of the truth."
    }
  ]
};
