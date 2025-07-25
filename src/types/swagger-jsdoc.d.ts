declare module 'swagger-jsdoc' {
  interface SwaggerDefinition {
    openapi: string;
    info: {
      title: string;
      version: string;
      description?: string;
    };
    servers?: Array<{
      url: string;
      description?: string;
    }>;
  }

  export interface Options {
    definition: SwaggerDefinition;
    apis: string[];
  }

  const swaggerJSDoc: (options: Options) => any;
  export default swaggerJSDoc;
}
