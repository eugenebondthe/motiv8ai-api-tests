import fs from 'fs'
import path from 'path'
import * as dotenv from 'dotenv'

dotenv.config()

export const createAllureEnvironmentFile = (): void => {
  const allureResultsFolder =
    process.env.ALLURE_RESULTS_FOLDER ?? 'allure-results'
  const reportFolder = path.resolve(process.cwd(), allureResultsFolder)
  const environmentContent = Object.entries(process.env).reduce(
    (previousValue, [variableName, value]) =>
      `${previousValue}\n${variableName}=${value}`,
    '',
  )

  fs.mkdirSync(reportFolder, { recursive: true })
  fs.writeFileSync(
    `${reportFolder}/environment.properties`,
    environmentContent,
    'utf-8',
  )
}
