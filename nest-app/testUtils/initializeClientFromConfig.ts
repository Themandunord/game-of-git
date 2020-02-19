const initializeClientFromConfig = repositoryClientConfig =>
    new repositoryClientConfig.client();

export default initializeClientFromConfig;
