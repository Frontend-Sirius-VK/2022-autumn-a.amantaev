export class ErrorComponent {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('error-container');
        const header = document.createElement('div');
        header.classList.add('error-header');
        header.textContent = this.data;
        const image = document.createElement('img');
        image.classList.add('error-image');
        // TODO убрать хардкод
        image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX/dXz///9NTU3y8vJGRkb/d35BS0v19fVJSUno6Oh/V1mDWFo/S0pJTExAQEDu7u5paWlCQkJeXl5jY2OgXmI7OzvWa3Dd3d3ibnTEZ2ypqalUVFSwYmZ0VVaysrKGhoaPj4/W1tZ1dXXKysqTXF71c3lVT0/NaW7pcHZfUVGsYWW8vLx4eHijX2JuU1W6ZWiZmZk0SUiNWl2/41coAAAQHUlEQVR4nOWdCZOiOBSAkUu0gREVL1pFHWxdunVm/v+P2yAkedwJRNvGVG3VzNYY8/nuvASk3t1Hf3AINyt/ux9Nxp4ne954Mtpv/dUmPAz69/966Y5zK4PDajvyXNd2HFU1DJkOw1BVx7Fd1xttV4eBcsdV3ItwHvojz7YRmFw9EKpteyM/nN9pJfcgnG8+ZdWpZUtzOqr8ubkHpWhCJfRl1+GBA5iOK/uhaI0VSjgIP1VbbUSHB/r8ZzgQuShxhP1wb9jNhJcRpW3sQ3FOVhThbmuz6KYVDQZIx97uBK1MCKGyGrvlyomYdN00Td2Sj8fjGf0nW7e/61W0qjteCTFJAYRzXy4TX0SiH9f/vt6Xs8XpdArigf60mC3fv/6tj/qNvESQsi/AubYm3O3VIvFZEZy8/louAknS4iHRQf5PsFh+reUIs4hTVfe7bybcjdwC8SGtlC/TjyDLVTRu/yb4mF5kvUiYhjtqydiKcLcv4LNM/TKdBfVsGc5gNr3oZh7ScNvJsQXhfJ8PDpZpvi1PEhcdpZROyzczD2nY+xb22JhQ8XN8lm4Nl3yyK5Dlcmjl1NWw/cZ+tSnhylGzePrlGrTCw5DB9ZKzSdVZPZRwN7az2ilPFwLwMORiKme11R7vHkbY9zPxzzKPQsQHGYPrMcNoOH6TXK4B4SGjoJZ++RCKhyE/LhldVdXDAwiVrZuR33B2B76YcTbMyNHdcnscXsKDp6b51vfiSxjXaUbV4xUjJ+GfVIiwzPM9+RLGc4rRsP/ckXAwceDvqcvXO/PFjFf0TWA4E64KmYfwkNous/RpcH++G2MwTbkcw+DRVA7CVSoGmufFY/hujIuzCb/c5gj/7ISfENCy3h+goABRe0+VV/ancMJfY+hDzfXpkXw3xtMailEd/xJLOPeACVr6YwWYIGrv0BoNj7HeYCM8wO1d/ZEWmGJcnIFTNRgTHCbCEKQxlvn7GwSYIGq/YWx0Q1GEGwhoXb+L78Z4hQ7H3YghhFFCP36ThhLExRFoKkvUqCf8AwHXDwryFYjBGiLWp3C1hH+AiiIT/Ga+aGi/AaJbi1hHCFXU/O8ZABHifyAy1ipqDeGGAlrm8jkAEeISuFS7xt1UE4IwYekfzwKIED9A8K8JGpWEBwBozZ4HECHOQNRwK0N/FeFcBYDfHCWyQ1sARLUqgasg/EVz0acDTCMaXkUaXkE4fmbADOK4CeEn0VFLfyobxEObUXejlteLpYQgEJpP5EXh0D5oXCwPi2WEBwD4NHEwO1BcpIhlDrWEcEDrQf1JMpmiof1HEzijZAeuhHBCCHW2XFR4zcg2IchRjQkP4R+yL6qvWb5J0xYzSWhnRpqxtbI0Wmk4xUl4ISE1QusYsHzN0jJNkXk5yq1N02Ky/+BIHGqxKRYRKiTUswVCbfr35pGGwvqHw5sH+Ttl+XIaFg2vqG1TRLglkdBk2bLQpolH09/EIGpvieaZTIhX4lDVLRshzbeZvAwBFIVIAFkRqbcpysHzhH3iZawzHyBCHLYHlIaghGdDPNPcJt8lzhP6REd1BiNMAUaIbaWoDVONJhZEbUE+ovr1hDsiQvOdG7C9ogIV5UB8J6twdrWEpKKwGCJhDrC1og717IRMiGviT3NVRpaQJtxWffOlALAlYh6QCVE70aCYTcEzhAqPjhYCtlHUnIqyIwI9VSoJiZth8KMQ0PAmdMujKSIEVCeg28WCSPxp1tmkCedER+v9qPYbAs4ViNhMUYcQUJlzIQJ/as8rCPd4Ur1+ypQE5/3+YAQR+aUIw4Q6GvT7nIhT/HFjX064wyK05LqEOwUoz/uKkkbkVtSUiiJANOFc5kEMZKyn9q6UkIiwNh/NA6IVwU44L2IKcPwrnpALkeanaSFCwh1OSGvdTFZFFSVGHDW2xZSK/sITcikqdTburoRwRERYs7dWDJhVVA5bzNogmZAHUZsRIY6KCakIa7KZIhXFiI2CRjpMDOCEPIpKMxsoREC4ZxRhmQTztsiqqMO8DTaRIhDivoiQdCmsavWqAmykqGUq2gBxSML+vICQpDPVO9zlKlqEyKCo+TCRRWRWVG2GpwKJDSFU8CTWpQ0gd9AoChPNES8kA1dyhCucc1fu4WvLvxUqihF5ErhUqlYEmFHUv1U7cHSfnx7tJ4S4LrSOlT8SbdqVAXLZYrUNFiJalfPhvUVaJ2JCEioq0xltQXW0FJAjaJSHiRwi1dOqmoAmNiRgYEK8g1idkVJ/LMsTpXRBrLZYb4N4PmVCCSsdIclOyc5iQtjHOXddUUEJq35zxgSuMFWr0wmzcn20xLD7KcIQ+5mauhAeZSm3G4XJFtlsMDtXTfOA1olOmCLE+Ux1qMgti/V3L1JUVhvM6kPdAnHAwHlNTEjahXrtNj677dQEDYYwkczDF1+vpBIeAMKQlL71raa6HKRYubK/fTMVZcmRAlIIh4DwEyspSyIpYnFifiY4Ibn3SJJT45MSKngSxpZ9awUTpup4Puk6/UqiCG3uqwohJEpqslV06QVWOoniBTL/RAO2uLqQTV3/m3TKNEwYq6kEywqLtWZtqKiJkrX7dMFI+sDJJrb2hoO+TwjxJBznSloEjaZhovz3TlK1pCUPzqBgwjnOSfUTK6AksVtSuurXqir6ik++lS9F+5cILSmLTvgL3HlCuEkSGuvCDtg8YAtLGehScKaGe9Y46DubhBDHivqN7tS8zazpKNgGJVBQWMc08S1eSMAMeQ/oNfKI4FRoEy9cOAJseHFlRTcz5JhwzlQ4Ff12jaIa24/ClaqRbcTEEGkJNb8RhsQM2/caWFSOW0Xrc1F8vC0hJNl3VF9INBrymWE8dSNb5ASszyQ17D3NWAuJIUYRUaKb+Y2OkTZK4MSkahBxGl1PsHDfmmxIRdv7Uk/BWyAmpxnGkzUKGoLCBFjGl2yaR1L6EdfjKYhwQPq+jXrTTRRVqIomywhmM3onS8OftweIEB9EZDldUji4Q7iQVC3PCJZPnKt9QIQr7Gi+GhLyBA3HkA1HYEVftqQv7GpWiBDvIzY/zs1ui/3VxJus+mJtsGhFOPlWt4iQuNLmdyqYbVHpK4OKbdbmLdbsghbUmUo97Er1Jq4UD9agUT34w0TZCPB6vJ7UT0qnJGttOJhtsRpQhA3GA/cv3L40wIRNXWkBYqWilgO2O66SXg52pu5AIsHiX8tjk8y2yATY5MiRFpBHOZGi2D5IOO9uHCzIYK3dSwAbnQCAgLOzZZ3xhhsOF04o4QJfZzgvW/MVrEGjWIItwwQqg6PUNGmgau+YcCOtWodD+iXNFbV9mEj225IilwbElYRrp7pTQkyDNYHLq2jz01TxIOVEXCGRRqfqS9v2AR98T7OgISBMkIZMfBGNhvythPtqupAnzjQKGiLCBCW8eUxSExt7aZTMbHHslVZ9E78tCknViOElOxXk4PdIIg1yMYT8CZyYVI3YYbJnesIzTqRx8iemS2pM35UKGgyEYqoJ7FqSzCU4JlOOpSTxZruGx/ZlQIrOqg6xv6LPgBNRTSTdJXJpz7sDIVRUY1IrQ3BdtUU1UUGYzG6dxRFqGr316A1qAAfkLJB1bHHVNkdIDgy/gAy7b4fd96Xdj4fdz2k6l5f+l81Lu1Jb4JI3ruRhbdGV+hBvW8Qn82B92JEan57HuEkK1vgd2achbV/z5k/gPk1H9tpIohifroR7bV3ZLyUHTmJCsF/ajT1v7YQJ4+MWcM+7G30LktLgw4egb9GN3hMNh3FKA3tP3egfkhOXcdBL9w870QMmN2Tj2xTpHnAn+vjk+HpcIqX7+F04i0HO6iV3tNNnMbpwnoYcbEuievo8TRfORJEbCMmNmPSZqC6cayO7MskB0/S5ti6cTSSXBvVYSTNnEztwvhS7zsRbZs+XduiMcFICZs8Id+mcd1wcZs95d+CsPomG8d9zZ/V//H0LbHZW2X2Ln35nJsDPCCi9M/PD7z1RJS299/TD766RHQucshXcXfvZ9w9prEhuWxTcP/zZd0ix67Ti0qHwDunPvgesneJ3QSQ39QvvAf/wu9zaMnoB9t9EwsV3uX/4fXztNL28JZVRyX38n/5MBfDy6JJnKrzAczG6/2yT7j+f5gWeMdT950S9wLO+uv+8tu4/c+8FnpvY/WdfvsDzS7v/DNoXeI5w958F/QLP8+7+M9n5nqufRvwhz9Xv/rsRXuD9Ft1/R8kLvGfmBd4V1P33Pb3AO7u6/961F3h33gu8/7D777B8gfeQvsC7ZF/gfcDdf6fzC7yX+wXerQ6qDMaw+OABAmFBRcFE+Mt7ZsQUoPerESHtZDwhIgSEXQo+QpCDI8SnskVtBgCL8m1Gwl4IEPUn8qjahw4Aw0qGasLehsYM63niIoqDFNDeVCPUEMKwWHeU5WEDHuqpCISMhL0/LkBky1HvPEAuilS0ON3mIez9AVLU18F3M2rBGgDatYAMhClF1Y/fHDW0xREC1qkoG2FvAxTVslg2Nu4HeAVRQnZrnAwzIQwayKX+Fl4LMvNpv00IWB0meAh7B5XWi7J+/iZN1RZnoKGGWhnoOQl7sNWFgv/7N4hR095BmI8aemxLZyTspa8PmmshT7PhAjyt4e66Oq5IthsRonoRuFTkcB4rRiRA6GJku7webE6YihpIjI+0RmSBqfYIS5RoQNg7GMAYkTVOHxT+tWAKLVA2DDYfw0/YG0wc+Evq8vUBqqppVznVjnImJbtqAgijFC4lRvM8uzOjps3OZkqADIlaG8LewUvdd7XM9T0ZEd86xSerHo+GNiHsKVtXTjMO78WI+IZpPtndFjVfxBJGCU762rKlXz7uwKhpHxc9zacypjFtCXt93zHSjObxGgiF1LTgeszIz3D8fIf3PoS93m6cio0Rozxlaxax8S2mcoZPtse7RmttRhgd7c/csLd0/SJEkJH4LnpGP2XV4QjyQgh7im+nVTWCtIZLrRUk+vRyaGXxUIjwuT1Ma0JUb+xzjEhbzbflqVk3EX3otHwzs9oZ8e0Z6wjBhMgc926OEUHql+ks4JMl+tfBbHrR83iy4e53bRbZihAxjgoYI5uUL9OPAFwLrGJDdB/Ti5yzvZhv1IqvNWEkx0x4TCAt3TTl9ddyEcQQaVbyv4LF8mstm6ZuFeChANhOfkIIkT36slMgyFiYaO3H9b+v9+VscTqdgnigPy1my/evf+tj9A+K2CLxObLfwv4EEiK/uhq7RYLE4kRaa95IjsfjGf13Izej68klcJH43PGqsf+EQwghGrutXSbIDG0FFRCfvd0JWpkoQpTLhXsjHz4aDDTLPmySnxUPcYRoDMJP1S5XV5aBPv8ZclW4dUMoIRpK6Msui74WCc9xZT8UYnxgiCaMxnzzifJIlQfTQP9e/twIcJ25cQ/CaMxDf+TZtlrLaaiqbXsjP7wHXTTuRRgNZXBYbUee69qOg1Ahq4HAHMd2XW+0XR0GojUTjnsSJqM/OISblb/djyZjz5M9bzwZ7bf+ahMeBuJcZun4H81T7WGXMwwDAAAAAElFTkSuQmCC';

        container.append(header, image);
        this.parent.appendChild(container);
    }
}