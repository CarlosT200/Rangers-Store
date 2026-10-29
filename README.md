# Clon front-end — Rangers Store

Copia del **front-end** de la tienda online, pensada como base para rediseñar y
prototipar. **No incluye back-end**: el catálogo, carrito, pagos y panel viven en
la plataforma **Bsale** y no son accesibles desde el navegador.

- **Fuente:** https://www.rangersstore.cl/
- **Capturado:** 2026-10-28
- **Plataforma original detectada:** Bsale (tema servido vía CDN CloudFront).

## Qué contiene

```
index.html          # HTML de la portada (código fuente del servidor)
index_raw.html      # HTML original sin modificar (respaldo)
assets/css/         # CSS de la tienda (incluye el diseño propio: style.css y modificaciones.css)
assets/js/          # JS de la tienda (bsale, modificaciones, soporte, owl, nouislider)
manifest.json       # mapa URL original -> archivo local
```

### Los archivos de diseño propios de la tienda
- `assets/css/42628__1__style.css` → **el diseño principal de esta tienda**.
- `assets/css/42628__1__modificaciones.css` → ajustes/custom encima de la base.
- `assets/css/market__bsale.css` → CSS base de la plataforma Bsale.

(El prefijo `42628__1__` es el identificador de la tienda en Bsale; lo mantuve en
el nombre para que sepas cuáles son los archivos propios versus los de plataforma.)

## Qué es local y qué es remoto

| Recurso | Estado | Por qué |
|---|---|---|
| HTML | **Local** | Lo vas a reestructurar. |
| CSS/JS de la tienda (CloudFront) | **Local** | Es el diseño y comportamiento; acá lo editas. Rutas internas reescritas a absolutas. |
| Bootstrap, Raleway (Google Fonts), jQuery, Popper, Slick, LazyLoad | **Remotos** | Librerías estándar servidas por CDNs públicos. |
| Imágenes de productos y banners | **Remotas** | Apuntan al CDN original para no inflar el repo. |
| Google Tag Manager / Analytics | **Remotos** | Scripts de terceros. |

> FontAwesome lo carga el JS de la plataforma de forma dinámica; igual dejé una
> copia local (`assets/css/fontawesome__css__all.min.css`) por si la necesitas.

## Cómo previsualizarlo

```bash
python3 -m http.server 8000
# abre http://localhost:8000 (con internet, para imágenes y librerías remotas)
```

## Nota importante sobre el carrito y los productos

Como no hay back-end, los botones de compra, el buscador y el carrito no
funcionarán de verdad: son la **interfaz**. Perfecto para rediseñar la vitrina,
pero la lógica de tienda habría que conectarla aparte (otra plataforma o un
back-end propio) si quieres que opere.

---
*Clon con fines de estudio, rediseño y prototipado. Mantén el repositorio
privado y no lo publiques como si fuera la tienda oficial.*
