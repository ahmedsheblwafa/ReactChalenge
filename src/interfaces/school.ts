// Generated by https://quicktype.io

export interface School {
    id: string
    month: string
    camp: string
    country: string
    school: string
    lessons: number
}

export enum Camp {
    Kakuma = 'Kakuma',
    Lemaci = 'Lemaci',
    Omaka = 'Omaka',
    Sebuna = 'Sebuna'
}

export enum Country {
    Egypt = 'Egypt',
    Kenya = 'Kenya',
    Tanzania = 'Tanzania',
    Tunisia = 'Tunisia'
}

export enum Month {
    APR = 'Apr',
    Aug = 'Aug',
    DEC = 'Dec',
    Feb = 'Feb',
    Jan = 'Jan',
    Jul = 'Jul',
    Jun = 'Jun',
    Mar = 'Mar',
    May = 'May',
    Nov = 'Nov',
    Oct = 'Oct',
    Sep = 'Sep'
}

export enum SchoolEnum {
    AssociazioneNauticaSebina = 'Associazione Nautica Sebina',
    BurkeHighSchool = 'Burke High School',
    CityParentsSchool = "City Parents' School",
    ColumbiaLawSchool = 'Columbia Law School',
    Greenlight = 'Greenlight',
    Iscae = 'ISCAE',
    JolieBoardingSchool = 'Jolie Boarding School',
    JonathanLawHighSchool = 'Jonathan Law High School',
    KakumaSecondary = 'Kakuma Secondary',
    KebalepileHighSchool = 'Kebalepile High School',
    ManagementSchoolESSCA = 'Management School ESSCA',
    MorneauShepell = 'Morneau Shepell',
    OmakaSecondary = 'Omaka Secondary',
    RapauraSchool = 'Rapaura School',
    SebunCLASSIC = 'Sebun CLASSIC',
    TeKupengaPreschool = 'Te Kupenga Preschool'
}

export interface filteredSchoolsReducerType {
    ['countryFilteredScools']: School[]
    ['nestedFilterInsideAllSchools']: { arr: School[]; color: string }[]
    ['campFilteredScools']: School[]
    ['schoolFilteredScools']: { arr: School[]; color: string }[]
    ['country']: { name: string; id: string }[]
    ['camp']: { name: string; id: string }[]
    ['school']: { name: string; id: string }[]
    ['nestedSchools']: string[]
    ['datasets']: dataSets
    ['elementsToSecondPage']: School[]
    ['filter']: {
        school: string
        country: string
        camp: string
    }
}

type dataSet = {
    data: number[]
    backgroundColor: string
    borderColor: string
    pointBackgroundColor: string
    pointRadius: number
    pointHoverBackgroundColor: string
    pointHoverRadius: number
}
export type dataSets = dataSet[]
