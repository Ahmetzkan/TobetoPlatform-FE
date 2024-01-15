import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './TrainingCard.css'
import { Paginate } from '../../models/paginate';
import { ProgrammingLanguage } from '../../models/programmingLanguage';
import ProgrammingLanguageService from '../../services/programmingLanguageService';
import { Country } from '../../models/country';
import CountryService from '../../services/countryService';


export default function TrainingCard(props: any) {
    const [programmingLanguages, setProgrammingLanguages] = useState<Paginate<ProgrammingLanguage>>();
    const [countries, setCountries] = useState<Paginate<Country>>();

    useEffect(() => {
        let programmingLanguageService = new ProgrammingLanguageService()
        programmingLanguageService.getAll().then(result => {
            setProgrammingLanguages(result.data)
        })
    }, []);

    useEffect(() => {
        let countryService = new CountryService()
        countryService.getAll().then(result => {
            setCountries(result.data)
        })
    }, []);


    return (

        <div className='training-content'>
            <div className='training-card-group'>
                {
                    props.check === "occupation" ? (
                        countries?.items.map((country) => (
                          <Card className="card-container">
                            <Card.Body className="card-body">
                              <span>{country.name}</span>
                              {/* <Card.Text className="card-title h5">{programmingLanguage.name}</Card.Text> */}
                            </Card.Body>
                          </Card>
                        ))
                      ) : (
                        programmingLanguages?.items.map((programmingLanguage) => (
                          <Card className="card-container">
                            <Card.Body className="card-body">
                              <span>{programmingLanguage.name}</span>
                              {/* <Card.Text className="card-title h5">{programmingLanguage.name}</Card.Text> */}
                            </Card.Body>
                          </Card>
                        ))
                      )
                }
            </div>
        </div>
    )
}