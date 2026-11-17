var APP_DATA = {
  "scenes": [
    {
      "id": "0-01-escena-exterior",
      "name": "01-ESCENA EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1774,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3816392459806668,
          "pitch": 0.40999569194390695,
          "rotation": 0,
          "target": "1-02-escena-interior"
        },
        {
          "yaw": 1.7378151143145093,
          "pitch": 0.29044940805464137,
          "rotation": 0,
          "target": "2-03-submarino"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9834513278389281,
          "pitch": 0.2269838692133863,
          "title": "Cushicle &amp; Suitaloon",
          "text": "Inspirado en los conceptos de Cushicle &amp; Suitaloon, este proyecto traslada la idea de una arquitectura móvil y adaptable a un entorno submarino."
        }
      ]
    },
    {
      "id": "1-02-escena-interior",
      "name": "02-ESCENA INTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7877565674982616,
          "pitch": 0.5456360954692769,
          "rotation": 0,
          "target": "0-01-escena-exterior"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0135051337100744,
          "pitch": -0.06027064511489044,
          "title": "Espacio Habitable",
          "text": "La propuesta combina la idea de un refugio compacto y equipado con un espacio interior pensado para la permanencia humana. El mobiliario, los dispositivos de observación y los elementos de almacenamiento buscan integrar descanso, trabajo y exploración en un mismo ambiente."
        }
      ]
    },
    {
      "id": "2-03-submarino",
      "name": "03-SUBMARINO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.539836544095083,
          "pitch": 0.00422053953729673,
          "rotation": 0,
          "target": "0-01-escena-exterior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
