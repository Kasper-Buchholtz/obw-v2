import Photo from "../atoms/Photo";
import Section from "./Section";


/**
 *
 * @returns: En Images-komponent ...
 * @example: <Images />
 * @alias: Images
  * @summary: Denne komponent bruges til at ...
 * @version: 1.0.0
 * @property: [...]
 * @author: Kasper Buchholtz
 *
**/


const Images = ({ data }) => {
    const images = [
        {
            "className": "col-span-4"
        },
        {
            "className": "col-span-4"
        },
        {
            "className": "col-span-4"
        }
    ]
    return (
        <Section className="h-screen grid-rows-4">
            {data.images.map((image, index) => (
                <div className={`${images[index].className}`} key={index}>
                    <Photo key={index} image={image} />
                </div>
            ))}
        </Section>
    )
};

export default Images;