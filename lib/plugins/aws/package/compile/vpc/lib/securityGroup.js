'use strict';

const BbPromise = require('bluebird');
const getSecurityGroupTemplate = require('./templates/securityGroup');

function compileSecurityGroup() {
  const { Resources } = this.serverless.service.provider.compiledCloudFormationTemplate;
  const logicalId = this.provider.naming.getSecurityGroupLogicalId();
  const vpcLogicalId = this.provider.naming.getVpcLogicalId();

  const securityGroupResource = { [logicalId]: getSecurityGroupTemplate(vpcLogicalId) };

  Object.assign(Resources, securityGroupResource);

  return BbPromise.resolve();
}

module.exports = { compileSecurityGroup };